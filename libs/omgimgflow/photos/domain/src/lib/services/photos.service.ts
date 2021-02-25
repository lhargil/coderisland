import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private readonly apiUrl = '/api/photos'
  constructor(private readonly httpClient: HttpClient) { }

  getPhotos(): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(this.apiUrl);
  }

  getPhoto(id: string): Observable<Photo> {
    return this.httpClient.get<Photo>(`${this.apiUrl}/${id}`)
  }

  updatePhoto(id: string, photoEdit: Photo) {
    const formData = new FormData();
    formData.append('title', photoEdit.title);
    formData.append('description', photoEdit.description);
    if (photoEdit.photoBlob != null) {
      formData.append('photo', photoEdit.photoBlob);
    }
    photoEdit.tags.forEach((tag: string) => formData.append('tags[]', tag));
    return this.httpClient
      .put(`/api/photos/${id}`, formData, {
        reportProgress: true,
        observe: 'events',
      });
  }

  createPhoto(photoEdit: Photo) {
  const formData = new FormData();
    formData.append('title', photoEdit.title);
    formData.append('description', photoEdit.description);
    if (photoEdit.photoBlob != null) {
      formData.append('photo', photoEdit.photoBlob);
    }
    photoEdit.tags.forEach((tag: string) => formData.append('tags[]', tag));
    return this.httpClient
      .post(`/api/photos`, formData, {
        reportProgress: true,
        observe: 'events',
      });
  }
}
