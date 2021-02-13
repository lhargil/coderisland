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
import { ImageFlowSettings, ImageTransformModes, ImageTransformScales, Photo } from '../models';
import { toRiapiQueryString } from '../utils';

export interface PhotoLite {
  filename: string;
  width: number;
  height: number;
}

const initialImageFlowSettings: ImageFlowSettings = {
  width: 100,
  height: 100,
  mode: ImageTransformModes.max,
  scale: ImageTransformScales.both,
  sepia: false,
};

const initialPhotoSettings: PhotoLite = {
  filename: '',
  width: 0,
  height: 0,
};

class ConfiguredImageState {
  imageUrl: string = '';
  photo: PhotoLite = initialPhotoSettings;
  imageFlowSettings: ImageFlowSettings = initialImageFlowSettings;
}

@Injectable({ providedIn: 'root' })
export class ConfigureFacade implements OnDestroy {
  private destroySubject = new ReplaySubject<void>(1);
  private destroy$ = this.destroySubject.asObservable();
  private state = new ConfiguredImageState();

  private store = new BehaviorSubject<ConfiguredImageState>(this.state);
  private store$ = this.store.asObservable();

  public imageFlowSettings$ = this.store$.pipe(
    map((state: ConfiguredImageState) => state.imageFlowSettings)
  );

  private setImageFlowSettings$ = new Subject<ImageFlowSettings>();
  private setPhotoLiteSettings$ = new Subject<PhotoLite>();

  private configureImageTriggers$ = merge(
    this.setImageFlowSettings$.pipe(
      distinctUntilChanged(),
      debounceTime(400),
      map((imageFlowSettings: ImageFlowSettings) => ({ imageFlowSettings }))
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
    const { imageFlowSettings, photo } = this.store.getValue();
    const configureState = this.configureImageTriggers$.pipe(
      startWith({ imageFlowSettings, photo } as any),
      scan(
        (
          acc: { imageFlowSettings: ImageFlowSettings; photo: PhotoLite },
          trigger: { imageFlowSettings: ImageFlowSettings; photo: PhotoLite }
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
        tap((state: { imageFlowSettings: ImageFlowSettings; photo: PhotoLite }) => {
          this.store.next({
            ...this.store.getValue(),
            imageFlowSettings: state.imageFlowSettings,
            photo: state.photo,
          });
        }),
        tap(console.log),
        switchMap(
          (config: { imageFlowSettings: ImageFlowSettings; photo: PhotoLite }) => {
            const queryString = toRiapiQueryString({
              ...config.imageFlowSettings,
              width: Math.ceil((config.imageFlowSettings.width/100)*config.photo.width),
              height: Math.ceil((config.imageFlowSettings.height/100)*config.photo.height),
            });

            return of(`${config.photo.filename}${queryString}`);
          }
        ),
        tap(console.log),
        takeUntil(this.destroy$)
      )
      .subscribe((imageUrl: string) => {
        this.store.next({
          ...this.store.getValue(),
          imageUrl,
        });
      });
  }

  configure(configChanges: Observable<any>) {
    configChanges.pipe(takeUntil(this.destroy$)).subscribe((c) => {
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
