import { Injectable, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  Observable,
  of,
  ReplaySubject,
  Subject,
} from 'rxjs';
import { Photo } from '../models/photo';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { PhotosDataService } from '../infrastructure/photos.data.service';

export interface SearchCriteria {
  title: string;
}

class SearchState {
  photos: Photo[] = [];
  criteria: SearchCriteria = {
    title: '',
  };
}

@Injectable({ providedIn: 'root' })
export class SearchFacade implements OnDestroy {
  private state = new SearchState();
  private dispatch = new BehaviorSubject<SearchState>(this.state);
  private destroySubject$ = new ReplaySubject<void>(1);
  private destroy$ = this.destroySubject$.asObservable();

  photos$: Observable<Photo[]> = this.dispatch.asObservable().pipe(
    map((state) => state.photos),
    startWith([] as Photo[])
  );
  searchCriteria$: Observable<SearchCriteria> = this.dispatch
    .asObservable()
    .pipe(map((state) => state.criteria));
  constructor(private readonly photosDataService: PhotosDataService) {}

  updateCriteria(title: string) {
    const criteria = { ...this.state.criteria, ...{ title } };

    this.dispatch.next(
      (this.state = {
        ...this.state,
        criteria,
      })
    );
  }

  loadPhotos(
    searchTerm$: Observable<string>,
    debounceMs = 400
  ): Observable<Photo[]> {
    const criteria = this.state.criteria;

    searchTerm$ = searchTerm$.pipe(
      debounceTime(debounceMs),
      distinctUntilChanged(),
      startWith(criteria.title)
    );

    combineLatest([searchTerm$])
      .pipe(
        switchMap(([searchTerm]) => {
          this.updateCriteria(searchTerm);
          const hasCriteria = searchTerm.length;

          return !hasCriteria
            ? this.photosDataService.getPhotos()
            : this.photosDataService.getPhotos().pipe(
                map((photos: Photo[]) => {
                  return photos.filter((photo) =>
                    photo.title
                      .toLocaleLowerCase()
                      .includes(searchTerm.toLocaleLowerCase())
                  );
                })
              );
        }),
        takeUntil(this.destroy$)
      )
      .subscribe(this.updatePhotos.bind(this));
    return this.photos$;
  }

  private updatePhotos(photos: Photo[]) {
    this.dispatch.next(
      (this.state = {
        ...this.state,
        photos,
      })
    );
  }

  ngOnDestroy() {
    this.destroySubject$.next();
  }
}
