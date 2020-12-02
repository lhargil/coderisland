import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageLoaderService {
  private loadingCollection: number[] = [];
  private isLoadingSubject = new Subject<boolean>();
  isLoading$ = this.isLoadingSubject.asObservable();
  show() {
    this.loadingCollection.push(1);
    this.somethingIsLoading();
  }
  hide() {
    this.loadingCollection.pop();
    this.somethingIsLoading();
  }
  private somethingIsLoading() {
    this.isLoadingSubject.next(this.loadingCollection && this.loadingCollection.length > 0);
  }
  constructor() { }
}
