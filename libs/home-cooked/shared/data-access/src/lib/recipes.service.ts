import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as recipes from './data/recipes.json';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private data: any[] = (recipes as any).default;
  constructor(private readonly httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return of(this.data);
  }

  getOne(id: number) {
    return of(this.data.find((_, index) => index == id));
  }
}
