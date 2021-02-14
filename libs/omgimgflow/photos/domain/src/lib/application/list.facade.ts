import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { Photo } from '../models';
import { PhotosService } from '../services';

class ListState {
  photos: Photo[] = [];
}

@Injectable({ providedIn: 'root' })
export class ListFacade implements OnDestroy {
  private listState = new ListState();
  private listStateSubject = new BehaviorSubject<ListState>(this.listState);
  private store$ = this.listStateSubject.asObservable();

  private destroySubject = new Subject<boolean>();
  private destroy$ = this.destroySubject.asObservable();

  photos$: Observable<Photo[]> = this.store$.pipe(
    map((state: ListState) => state.photos),
    startWith([] as Photo[]),
  );
  constructor(private readonly photosService: PhotosService) {}

  ngOnDestroy() {
    this.destroySubject.next();
  }

  loadPhotos() {
    this.photosService
      .getPhotos()
      .pipe(
        map((photos: Photo[]) =>
          photos.map((photo) => {
            return {
              ...photo,
              filename: `/omgimages/${photo.filename}`,
            };
          }),
        ),
        takeUntil(this.destroy$),
      )
      .subscribe(this.updatePhotos.bind(this));
  }

  private updatePhotos(photos: Photo[]) {
    this.listStateSubject.next(
      (this.listState = {
        ...this.listState,
        photos,
      }),
    );
  }
}
