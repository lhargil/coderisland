import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '@coderisland/home-cooked/shared/models';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {

  constructor(private readonly httpClient: HttpClient) {}

  getAll(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(`api/recipes`);
  }

  getOne(id: string): Observable<Recipe> {
    return this.httpClient.get<Recipe>(`api/recipes/${id}`);
  }
}
