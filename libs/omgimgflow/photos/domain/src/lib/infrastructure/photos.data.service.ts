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
}
