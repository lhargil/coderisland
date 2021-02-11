import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, of, ReplaySubject } from 'rxjs';
import { map, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { PhotosDataService } from '../infrastructure/photos.data.service';
import { Photo } from '../models/photo';

const initialState = {
  id: '',
  photoBlob: null,
  filename: '',
  title: '',
  description: '',
  tags: [],
};

class EditState {
  photo: Photo = initialState;
}
@Injectable({ providedIn: 'root' })
export class EditFacade implements OnDestroy {
  private state = new EditState();
  private dispatch = new BehaviorSubject<EditState>(this.state);
  private destroySubject$ = new ReplaySubject<void>(1);
  private destroy$ = this.destroySubject$.asObservable();
  photo$: Observable<Photo> = this.dispatch.asObservable().pipe(
    map((state) => state.photo),
  );

  constructor(private readonly photosDataService: PhotosDataService) {}

  loadPhoto(routeId$: Observable<string>): Observable<Photo> {
    routeId$
      .pipe(
        switchMap((id: string) => this.photosDataService.getPhoto(id)),
        takeUntil(this.destroy$)
      )
      .subscribe(this.updatePhoto.bind(this));

    return this.photo$;
  }

  createPhoto() {
    this.updatePhoto({...initialState});
  }

  submitPhotoUpdate(photo: Photo) {
    this.photosDataService
      .updatedPhoto(photo.id, photo)
      .pipe(
        takeUntil(this.destroy$),
        tap(() => this.loadPhoto(of(photo.id)))
      )
      .subscribe();
  }

  submitPhotoCreate(photo: Photo) {
    this.photosDataService
      .createPhoto(photo)
      .pipe(
        takeUntil(this.destroy$),
        map((result: any) => result),
      )
      .subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Request has been made!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header has been received!');
            break;
          case HttpEventType.UploadProgress:
            // const progress = Math.round((event.loaded / event.total!) * 100);
            // console.log(`Uploaded! ${progress}%`);
            break;
          case HttpEventType.Response:
            this.updatePhoto({...initialState});
        }
      });
  }

  ngOnDestroy() {
    this.destroySubject$.next();
  }

  private updatePhoto(photo: Photo) {
    this.dispatch.next(
      (this.state = {
        ...this.state,
        photo,
      })
    );
  }
}
