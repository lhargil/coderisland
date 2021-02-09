import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { Photo } from '../models/photo';
import { map, startWith, switchMap, tap } from 'rxjs/operators';
import { PhotosDataService } from '../infrastructure/photos.data.service';

class SearchState {
  photos: Photo[] = [];
}

@Injectable({providedIn: 'root'})
export class SearchFacade {
  private state = new SearchState();
  private dispatch = new BehaviorSubject<SearchState>(this.state);
  photos$ = this.photosDataService.getPhotos();

  constructor(private readonly photosDataService: PhotosDataService) {}
}
