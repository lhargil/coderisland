import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as RecipesFeature from './recipes.reducer';
import * as RecipesActions from './recipes.actions';
import { RecipesService, selectRouteParam } from '@coderisland/home-cooked/shared/data-access';
import { filter, map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { RouterNavigationAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { select, Store } from '@ngrx/store';
import { getRecipeSearch } from './recipes.selectors';
import { of } from 'rxjs';
import { PagedResult, Recipe, RecipeSearch } from '@coderisland/home-cooked/shared/models';

@Injectable()
export class RecipesEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipesActions.init),
      withLatestFrom(this.recipeStore.pipe(select(getRecipeSearch))),
      mergeMap(([, recipeSearch]) => {
        return this.recipesService
          .getRecipes(recipeSearch)
          .pipe(map((pagedResult: PagedResult) => RecipesActions.loadPagedRecipesSuccess({ pagedResult })));
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
        return this.recipesService
          .getOne(recipeId)
          .pipe(map((recipe: Recipe) => RecipesActions.loadOneRecipeSuccess({ recipe })));
      }),
    );
  });

  searchRecipes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RecipesActions.searchRecipes.type),
      switchMap(({ recipeSearch }) => {
        return this.recipesService
          .getRecipes(recipeSearch)
          .pipe(map((pagedResult: PagedResult) => RecipesActions.loadPagedRecipesSuccess({ pagedResult })));
      }),
    );
  });

  constructor(
    private actions$: Actions,
    private readonly recipesService: RecipesService,
    private store: Store,
    private recipeStore: Store<RecipesFeature.RecipesPartialState>,
  ) {}
}
