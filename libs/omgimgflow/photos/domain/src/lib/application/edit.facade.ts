import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, of, ReplaySubject } from 'rxjs';
import { map, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { PhotosDataService } from '../infrastructure/photos.data.service';
import { Photo } from '../models/photo';

class EditState {
  photo: Photo = {
    id: '',
    photo: null,
    filename: '',
    title: '',
    description: '',
    tags: [],
  };
}

@Injectable({ providedIn: 'root' })
export class EditFacade implements OnDestroy {
  private state = new EditState();
  private dispatch = new BehaviorSubject<EditState>(this.state);
  private destroySubject$ = new ReplaySubject<void>(1);
  private destroy$ = this.destroySubject$.asObservable();

  photo$: Observable<Photo> = this.dispatch.asObservable().pipe(
    map((state) => state.photo),
    startWith({
      id: '',
      photo: null,
      filename: '',
      title: '',
      description: '',
      tags: [],
    })
  );

  constructor(private readonly photosDataService: PhotosDataService) {}

  loadPhoto(routeId$: Observable<string>): Observable<Photo> {
    routeId$.pipe(
      switchMap((id: string) => this.photosDataService.getPhoto(id)),
      takeUntil(this.destroy$)
    ).subscribe(this.updatePhoto.bind(this))

    return this.photo$;
  }

  submitPhotoUpdate(photo: Photo) {
    this.photosDataService.updatedPhoto(photo.id, photo)
      .pipe(
        takeUntil(this.destroy$),
        tap(() => this.loadPhoto(of(photo.id)))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroySubject$.next();
  }

  private updatePhoto(photo: Photo) {
    this.dispatch.next((
      this.state = {
        ...this.state,
        photo
      }
    ))
  }
}
