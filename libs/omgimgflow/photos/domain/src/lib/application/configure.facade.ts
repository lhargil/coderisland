import { Injectable, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  merge,
  Observable,
  of,
  ReplaySubject,
  Subject,
} from 'rxjs';
import {
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

export interface PhotoLite {
  filename: string;
  width: number;
  height: number;
}

const initialImageFlowSettings: ImageFlowSettings = {
  width: 100,
  height: 100,
  sepia: true,
};

const initialPhotoSettings: PhotoLite = {
  filename: '',
  width: 0,
  height: 0,
};

class ConfiguredImageState {
  imageUrl: string = '';
  photo: PhotoLite = initialPhotoSettings;
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
  private setPhotoLiteSettings$ = new Subject<PhotoLite>();

  private configureImageTriggers$ = merge(
    this.setImageFlowSettings$.pipe(
      distinctUntilChanged(),
      debounceTime(400),
      map((settings: ImageFlowSettings) => ({ settings }))
    ),
    this.setPhotoLiteSettings$.pipe(
      map((photoLite: PhotoLite) => {
        return {
          photo: photoLite,
        };
      })
    )
  );

  imageUrl$: Observable<string> = this.store$.pipe(
    map((state: ConfiguredImageState) => state.imageUrl),
    startWith(this.state.imageUrl)
  );

  constructor(private readonly photoDataService: PhotosDataService) {
    const { settings, photo } = this.store.getValue();
    const configureState = this.configureImageTriggers$.pipe(
      startWith({ settings, photo } as any),
      scan(
        (
          acc: { settings: ImageFlowSettings; photo: PhotoLite },
          trigger: { settings: ImageFlowSettings; photo: PhotoLite }
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
        tap((state: { settings: ImageFlowSettings; photo: PhotoLite }) => {
          this.store.next({
            ...this.store.getValue(),
            settings: state.settings,
            photo: state.photo,
          });
        }),
        tap(console.log),
        switchMap(
          (config: { settings: ImageFlowSettings; photo: PhotoLite }) => {
            const queryString = `w=${Math.ceil((config.settings.width/100)*config.photo.width)}&s.sepia=${config.settings.sepia}`;

            return of(`${config.photo.filename}?${queryString}`);
          }
        ),
        tap(console.log)
      )
      .subscribe((imageUrl: string) => {
        this.store.next({
          ...this.store.getValue(),
          imageUrl,
        });
      });
  }

  configure(configChanges: Observable<any>) {
    configChanges.subscribe((c) => {
      this.setImageFlowSettings$.next(c);
    });
  }

  loadPhoto(routeId$: Observable<string>): Observable<string> {
    routeId$
      .pipe(
        switchMap((id: string) => {
          return this.photoDataService.getPhoto(id).pipe(
            map((photo: Photo) => {
              const { filename, width, height } = photo;
              return { filename, width, height };
            })
          );
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((photo) => {
        this.setPhotoLiteSettings$.next(photo);
      });

    return this.imageUrl$;
  }

  ngOnDestroy() {
    this.destroySubject.next();
  }
}
