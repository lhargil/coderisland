import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '@coderisland/home-cooked/shared/models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private readonly httpClient: HttpClient) {}

  getAll(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(`api/recipes`).pipe(
      map((recipes: Recipe[]) => {
        return recipes.map(this.remapRecipe());
      }),
    );
  }

  getOne(id: string): Observable<Recipe> {
    return this.httpClient.get<Recipe>(`api/recipes/${id}`).pipe(map(this.remapRecipe()));
  }

  private remapRecipe(): (recipe: Recipe) => Recipe {
    return (recipe: Recipe) => {
      return {
        ...recipe,
        recipeImage: `/omgimages/${recipe.recipeImage}?crop==10,10,-10,-100`
      };
    };
  }
}
