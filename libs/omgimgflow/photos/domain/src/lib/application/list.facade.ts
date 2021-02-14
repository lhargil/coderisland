import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { Photo } from '../models';
import { PhotosService } from '../services';

class ListState {
  photos: Photo[] = [];
  searchTerm: string = '';
}

@Injectable({ providedIn: 'root' })
export class ListFacade implements OnDestroy {
  private listState = new ListState();
  private listStateSubject = new BehaviorSubject<ListState>(this.listState);
  private store$ = this.listStateSubject.asObservable();

  private destroySubject = new Subject<void>();
  private destroy$ = this.destroySubject.asObservable();

  photos$: Observable<Photo[]> = this.store$.pipe(
    map((state: ListState) => state.photos),
    startWith([] as Photo[]),
  );

  searchTerm$: Observable<string> = this.store$.pipe(
    map((state: ListState) => state.searchTerm),
    startWith(''),
  );

  constructor(private readonly photosService: PhotosService) {}

  ngOnDestroy() {
    this.destroySubject.next();
  }

  loadPhotos(search$: Observable<string>, debounce: number = 400) {
    const searchTerm = this.listState.searchTerm;
    search$ = search$.pipe(debounceTime(debounce), distinctUntilChanged(), startWith(searchTerm));

    search$
      .pipe(
        switchMap((searchTerm: string) => {
          this.updateSearchTerm(searchTerm);

          return !searchTerm.length
            ? this.photosService.getPhotos()
            : this.photosService.getPhotos().pipe(
                map((photos: Photo[]) =>
                  photos.filter((photo: Photo) => {
                    return photo.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
                  }),
                ),
              );
        }),
        map((photos: Photo[]) =>
          photos.map((photo: Photo) => {
            return {
              ...photo,
              filename: `/omgimages/${photo.filename}`,
            };
          }),
        ),
        takeUntil(this.destroy$),
      )
      .subscribe(this.updatePhotos.bind(this));
  }

  private updateSearchTerm(searchTerm: string) {
    this.listStateSubject.next(
      (this.listState = {
        ...this.listState,
        searchTerm,
      }),
    );
  }

  private updatePhotos(photos: Photo[]) {
    this.listStateSubject.next(
      (this.listState = {
        ...this.listState,
        photos,
      }),
    );
  }
}
