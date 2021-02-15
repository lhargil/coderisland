import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { Photo } from '../models';
import { PhotosService } from '../services';

const initialPhotoState = {
    id: '',
    title: '',
    filename: '',
    description: '',
    width: 0,
    height: 0,
    tags: [],
  };

class EditState {
  photo: Photo = initialPhotoState;
}

@Injectable({ providedIn: 'root' })
export class EditFacade implements OnDestroy {
  private editState = new EditState();
  private storeSubject = new BehaviorSubject<EditState>(this.editState);
  private store$ = this.storeSubject.asObservable();

  private destroySubject = new Subject<void>();
  private destroy$ = this.destroySubject.asObservable();

  photo$ = this.store$.pipe(
    map((state: EditState) => state.photo),
    startWith({...initialPhotoState})
  );

  constructor(private readonly photosService: PhotosService) {}

  ngOnDestroy() {
    this.destroySubject.next();
  }

  loadPhoto(routeParam$: Observable<string>) {
    routeParam$
      .pipe(
        switchMap((id: string) => {
          return this.photosService.getPhoto(id)
            .pipe(
              map((photo: Photo) => ({ ...photo, filename: `/omgimages/${photo.filename}`}))
            )
        }),
        tap(console.log),
        takeUntil(this.destroy$)
      )
      .subscribe(this.updatePhoto.bind(this));
  }

  private updatePhoto(photo: Photo) {
    this.storeSubject.next(
      (
        this.editState = {
          ...this.editState,
          photo
        }
      )
    );
  }
}
