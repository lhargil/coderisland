import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, merge, Observable, of, Subject } from 'rxjs';
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
import { ImageFlowSettings, ImageTransformModes, ImageTransformScales, Photo } from '../models';
import { PhotosService } from '../services';
import { toRiapiQueryString } from '../utils';

interface PhotoPreview {
  filename: string;
  url: string;
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

const initialPhotoPreviewSettings: PhotoPreview = {
  filename: '',
  url: '',
  width: 0,
  height: 0,
};

class ConfiguredImageState {
  photoPreview: PhotoPreview = initialPhotoPreviewSettings;
  imageFlowSettings: ImageFlowSettings = initialImageFlowSettings;
}

@Injectable({ providedIn: 'root' })
export class ConfigureFacade implements OnDestroy {
  private state = new ConfiguredImageState();
  private storeSubject = new BehaviorSubject<ConfiguredImageState>(this.state);
  private store$ = this.storeSubject.asObservable();

  private destroySubject = new Subject<void>();
  private destroy$ = this.destroySubject.asObservable();

  imageFlowSettings$ = this.store$.pipe(
    map((state: ConfiguredImageState) => state.imageFlowSettings),
    startWith({ ...initialImageFlowSettings }),
  );

  photoPreview$ = this.store$.pipe(
    map((state: ConfiguredImageState) => state.photoPreview),
    startWith({ ...initialPhotoPreviewSettings }),
  );

  private setImageFlowSettings$ = new Subject<ImageFlowSettings>();
  private setPhotoPreviewSettings$ = new Subject<PhotoPreview>();

  private configureImageTriggers$ = merge(
    this.setImageFlowSettings$.pipe(
      distinctUntilChanged(),
      debounceTime(400),
      map((imageFlowSettings: ImageFlowSettings) => ({ imageFlowSettings })),
    ),
    this.setPhotoPreviewSettings$.pipe(
      map((photoPreview: PhotoPreview) => {
        return {
          photoPreview,
        };
      }),
    ),
  );

  constructor(private readonly photosService: PhotosService) {
    const { imageFlowSettings, photoPreview } = this.state;
    const configuredState = this.configureImageTriggers$.pipe(
      startWith({ imageFlowSettings, photoPreview } as any),
      scan(
        (
          acc: { imageFlowSettings: ImageFlowSettings; photoPreview: PhotoPreview },
          trigger: { imageFlowSettings: ImageFlowSettings; photoPreview: PhotoPreview },
        ) => {
          return {
            ...acc,
            ...trigger,
          };
        },
      ),
      shareReplay(1),
    );

    configuredState
      .pipe(
        tap((state: ConfiguredImageState) => {
          this.storeSubject.next({
            ...this.state,
            imageFlowSettings: state.imageFlowSettings,
            photoPreview: state.photoPreview,
          });
        }),
        switchMap((configuredImageState: ConfiguredImageState) => {
          const queryString = toRiapiQueryString({
            ...configuredImageState.imageFlowSettings,
            width: Math.ceil((configuredImageState.imageFlowSettings.width / 100) * configuredImageState.photoPreview.width),
            height: Math.ceil((configuredImageState.imageFlowSettings.height / 100) * configuredImageState.photoPreview.height),
          });
          const url = `${configuredImageState.photoPreview.url}${queryString}`;
          return of({
            ...configuredImageState,
            photoPreview: {
              ...configuredImageState.photoPreview,
              url,
            },
          });
        }),
        takeUntil(this.destroy$),
      )
      .subscribe((configuredImageState: ConfiguredImageState) => {
        this.storeSubject.next(
          (this.state = {
            ...this.state,
            ...configuredImageState,
          }),
        );
      });
  }

  ngOnDestroy() {
    this.destroySubject.next();
  }

  loadPhotoPreview(routeId$: Observable<string>) {
    routeId$
      .pipe(
        switchMap((id: string) => {
          return this.photosService.getPhoto(id).pipe(
            map((photo: Photo) => {
              const { filename, width, height } = photo;
              return {
                filename,
                url: `/omgimages/${filename}`,
                width,
                height,
              };
            }),
          );
        }),
        takeUntil(this.destroy$),
      )
      .subscribe((photoPreview: PhotoPreview) => this.setPhotoPreviewSettings$.next(photoPreview));
  }

  configure(configChange: Observable<ImageFlowSettings>) {
    configChange.pipe(takeUntil(this.destroy$)).subscribe((configChange: ImageFlowSettings) => {
      this.setImageFlowSettings$.next(configChange);
    });
  }
}
