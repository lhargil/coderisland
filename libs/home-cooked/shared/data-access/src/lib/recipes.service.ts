import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PagedResult, Recipe, RecipeSearch } from '@coderisland/home-cooked/shared/models';
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

  getRecipes(recipeSearch: RecipeSearch): Observable<PagedResult> {
    const params = Object.entries(recipeSearch).reduce((acc, [key, value]) => {
      return {
        ...acc,
        [key]:value
      }
    }, {});

    return this.httpClient.get<PagedResult>(`api/recipes/query`, { params }).pipe(
      map((pagedResult: PagedResult) => {
        const recipes = pagedResult.recipes.map(this.remapRecipe())
        return {
          ...pagedResult,
          recipes
        };
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
        recipeImage: `/omgimages/${recipe.recipeImage}`
      };
    };
  }
}
