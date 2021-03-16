import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as RecipesFeature from './recipes.reducer';
import * as RecipesActions from './recipes.actions';
import { RecipesService, selectRouteParam } from '@coderisland/home-cooked/shared/data-access';
import { filter, map, mergeMap, switchMap, take, tap, withLatestFrom } from 'rxjs/operators';
import { RouterNavigationAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { select, Store } from '@ngrx/store';
import { getSelectRecipe } from './recipes.selectors';
import { of } from 'rxjs';
import { PagedResult, Recipe } from '@coderisland/home-cooked/shared/models';

@Injectable()
export class RecipesEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipesActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return this.recipesService.getAll().pipe(map((recipes) => RecipesActions.loadRecipesSuccess({ recipes })));
        },

        onError: (action, error) => {
          console.error('Error', error);
          return RecipesActions.loadRecipesFailure({ error });
        },
      }),
    ),
  );

  getOneRecipeFromRoute$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigationAction) => r.payload.routerState.url.startsWith('/recipes/')),
      withLatestFrom(this.store.pipe(select(selectRouteParam('recipeId'))), this.recipeStore),
      filter(([, recipeId, recipeStore]) => !!recipeId),
      mergeMap(([, recipeId, recipeStore]) => {
        if (recipeId && recipeStore[RecipesFeature.RECIPES_FEATURE_KEY].entities[recipeId]) {
          return of(RecipesActions.loadOneRecipeFromRouteSuccess({ recipeId: recipeId }));
        }
        return of(RecipesActions.loadOneRecipeFromRouteFailure({ recipeId: recipeId! }));
      }),
    );
  });

  getOneRecipeFromAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RecipesActions.loadOneRecipeFromRouteFailure.type),
      switchMap(({ recipeId }) => {
        return this.recipesService.getOne(recipeId).pipe(map((recipe: Recipe) => RecipesActions.loadOneRecipeSuccess({ recipe })));
      }),
    );
  });

  searchRecipes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RecipesActions.searchRecipes.type),
      switchMap(({ recipeSearch }) => {
        return this.recipesService.getRecipes(recipeSearch).pipe(map((pagedResult: PagedResult) => RecipesActions.loadPagedRecipesSuccess({ pagedResult })));
      })
    );
  });

  constructor(
    private actions$: Actions,
    private readonly recipesService: RecipesService,
    private store: Store,
    private recipeStore: Store<RecipesFeature.RecipesPartialState>,
  ) {}
}
