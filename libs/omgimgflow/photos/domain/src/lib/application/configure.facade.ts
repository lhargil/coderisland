import { Injectable, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  merge,
  Observable,
  of,
  ReplaySubject,
  Subject,
} from 'rxjs';
import {
  debounce,
  debounceTime,
  distinctUntilChanged,
  map,
  scan,
  shareReplay,
  startWith,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { PhotosDataService } from '../infrastructure/photos.data.service';
import { ImageFlowSettings, Photo } from '../models';

const initialImageFlowSettings: ImageFlowSettings = {
  width: 1024,
  sepia: true,
};

class ConfiguredImageState {
  imageUrl: string = '';
  imageFilename: string = '';
  settings: ImageFlowSettings = initialImageFlowSettings;
}

@Injectable({ providedIn: 'root' })
export class ConfigureFacade implements OnDestroy {
  private destroySubject = new ReplaySubject<void>(1);
  private destroy$ = this.destroySubject.asObservable();
  private state = new ConfiguredImageState();

  private store = new BehaviorSubject<ConfiguredImageState>(this.state);
  private store$ = this.store.asObservable();

  public imageFlowSettings$ = this.store$.pipe(
    map((state: ConfiguredImageState) => state.settings)
  );

  private setImageFlowSettings$ = new Subject<ImageFlowSettings>();
  private setImageFilename$ = new Subject<string>();

  private configureImageTriggers$ = merge(
    this.setImageFlowSettings$.pipe(
      distinctUntilChanged(),
      debounceTime(400),
      map((settings: ImageFlowSettings) => ({ settings }))
    ),
    this.setImageFilename$.pipe(
      map((imageFilename: string) => {
        return {
          imageFilename,
        };
      })
    )
  );

  imageUrl$: Observable<string> = this.store$.pipe(
    map((state: ConfiguredImageState) => state.imageUrl),
    startWith(this.state.imageUrl)
  );

  constructor(private readonly photoDataService: PhotosDataService) {
    const { settings, imageFilename } = this.store.getValue();
    const configureState = this.configureImageTriggers$.pipe(
      startWith({settings, imageFilename} as any),
      scan(
        (
          acc: { settings: ImageFlowSettings, imageFilename: string },
          trigger: { settings: ImageFlowSettings, imageFilename: string }
        ) => {
          return {
            ...acc,
            ...trigger,
          };
        }
      ),
      shareReplay(1)
    );

    configureState
      .pipe(
        tap(console.log),
        tap((state: { settings: ImageFlowSettings, imageFilename: string }) => {
          this.store.next({
            ...this.store.getValue(),
            settings: state.settings,
            imageFilename: state.imageFilename
          })
        }),
        switchMap(
          (config: {
            settings: ImageFlowSettings;
            imageFilename: string;
          }) => {
            const queryString = `w=${Math.floor((config.settings.width/100)*1024)}&s.sepia=${config.settings.sepia}`;
            return of(`${config.imageFilename}?${queryString}`);
          }
        )
      )
      .subscribe((imageUrl: string) => {
        this.store.next({
          ...this.store.getValue(),
          imageUrl,
        });
      });
  }

  configure(configChanges: Observable<any>) {
    configChanges.subscribe(c => {
      this.setImageFlowSettings$.next(c);
    })
  }

  loadPhoto(routeId$: Observable<string>): Observable<string> {
    routeId$
      .pipe(
        switchMap((id: string) => {
          return this.photoDataService
            .getPhoto(id)
            .pipe(map((photo: Photo) => photo.filename));
        }),
        takeUntil(this.destroy$)
      )
      .subscribe(filename => this.setImageFilename$.next(filename));

    return this.imageUrl$;
  }

  ngOnDestroy() {
    this.destroySubject.next();
  }
}
