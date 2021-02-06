import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Photo } from '../models/photo';
import { map, startWith } from 'rxjs/operators';
import { PhotosDataService } from '../infrastructure/photos.data.service';

class SearchState {
  photos: Photo[] = [];
}

@Injectable({providedIn: 'root'})
export class SearchFacade {
  private state = new SearchState();
  private dispatch = new BehaviorSubject<SearchState>(this.state);

  searchResults$: Observable<Photo[]> = this.dispatch.asObservable().pipe(
    map(state => state.photos),
    startWith([] as Photo[])
  );

  constructor(private readonly photosDataService: PhotosDataService) { }

  loadPhotos() {
    this.photosDataService.getPhotos()
      .subscribe(photos => {
        this.updateResults(photos);
      })
  }

  private updateResults(photos: Photo[]) {
    this.dispatch.next((
      this.state = {
        ...this.state,
        photos
      }
    ))
  }
}
