import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { map, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { Photo } from '../models';
import { PhotosService } from '../services';

const initialPhotoState: Photo = {
  id: '',
  title: '',
  photoBlob: null,
  filename: '',
  description: '',
  width: 0,
  height: 0,
  tags: [],
};

class EditState {
  photo: Photo = initialPhotoState;
  uploadedFile: File | null = null;
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
    startWith({ ...initialPhotoState }),
  );

  constructor(private readonly photosService: PhotosService) {}

  ngOnDestroy() {
    this.destroySubject.next();
  }

  loadPhoto(routeParam$: Observable<string>) {
    routeParam$
      .pipe(
        switchMap((id: string) => {
          if ('' === id) {
            return of({...initialPhotoState});
          }
          return this.photosService
            .getPhoto(id)
            .pipe(map((photo: Photo) => ({ ...photo, filename: `/omgimages/${photo.filename}` })));
        }),
        takeUntil(this.destroy$),
      )
      .subscribe(this.updatePhoto.bind(this));
  }

  updateUploadedPhoto(uploadedFile: File) {
    this.storeSubject.next(
      (this.editState = {
        ...this.editState,
        uploadedFile,
      }),
    );
  }

  submitCreatedPhoto(photo: Photo) {
    const editState = this.editState;

    this.photosService
      .createPhoto({
        ...photo,
        photoBlob: editState.uploadedFile
      })
      .pipe(
        takeUntil(this.destroy$),
        map((result: any) => result),
      ).subscribe((event: HttpEvent<any>) => {
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
            console.log('Created!', event);
            this.loadPhoto(of(editState.photo.id));
        }
      });
  }

  submitPhotoUpdate(photo: Photo) {
    const editState = this.editState;
    this.photosService
      .updatePhoto(editState.photo.id, {
        ...photo,
        photoBlob: editState.uploadedFile,
      })
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
            console.log('Updated!');
            this.loadPhoto(of(editState.photo.id));
        }
      });
  }

  private updatePhoto(photo: Photo) {
    this.storeSubject.next(
      (this.editState = {
        ...this.editState,
        photo,
      }),
    );
  }
}
