import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { mergeMap, map, switchMap, tap, filter } from 'rxjs/operators';
import { RouterNavigatedAction, RouterNavigationAction, ROUTER_NAVIGATED, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { RecipesService, selectRouteParam } from '@coderisland/home-cooked/shared/data-access';
import { Recipe } from '@coderisland/home-cooked/shared/models';
import { selectGuide } from './guides.actions';
import { of } from 'rxjs';

@Injectable()
export class GuidesEffects {
  getSelectedGuide$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigationAction) => r.payload.routerState.url.startsWith('/guides')),
      mergeMap(() => {
        const recipeGuideId = this.store.pipe(select(selectRouteParam('recipeGuideId')));
        return recipeGuideId;
      }),
      filter((recipeGuideId: string | undefined) => !!recipeGuideId),
      switchMap((id: string | undefined) => {
        return this.recipesService
          .getOne(id!)
          .pipe(map((recipe: Recipe) => selectGuide({ id: recipe.id, recipeGuide: recipe })));
      }),
    );
  });

  constructor(private actions$: Actions, private store: Store, private recipesService: RecipesService) {}
}
