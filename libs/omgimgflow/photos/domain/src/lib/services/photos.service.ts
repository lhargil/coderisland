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
}
