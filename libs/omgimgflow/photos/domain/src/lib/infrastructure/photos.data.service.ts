import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../models/photo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotosDataService {
  readonly photosApi = '/api/photos';
  constructor(private readonly httpClient: HttpClient) { }

  getPhotos(): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(this.photosApi)
      .pipe(
        map(photos => {
          return photos.map(photo => {
            return {
              ...photo,
              filename: `/omgimages/${photo.filename}`
            };
          })
        })
      );
  }

  getPhoto(id: string): Observable<Photo> {
    return this.httpClient.get<Photo>(`${this.photosApi}/${id}`)
      .pipe(
        map((photo: Photo) => {
          return {
            ...photo,
            filename: `/omgimages/${photo.filename}`
          };
        })
      );
  }

  updatedPhoto(id: string, photoEdit: Photo) {
    const formData = new FormData();
    formData.append('title', photoEdit.title);
    formData.append('description', photoEdit.description);
    if (photoEdit.photo != null) {
      formData.append('photo', photoEdit.photo);
    }
    photoEdit.tags.forEach((tag: string) => formData.append('tags[]', tag));
    return this.httpClient
      .put(`/api/photos/${id}`, formData, {
        reportProgress: true,
        observe: 'events',
      });
  }
}
