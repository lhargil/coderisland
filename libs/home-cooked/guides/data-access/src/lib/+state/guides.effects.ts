import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { createAction, select, Store } from '@ngrx/store';
import { mergeMap, map, switchMap, tap, filter, withLatestFrom } from 'rxjs/operators';
import { RouterNavigatedAction, RouterNavigationAction, ROUTER_NAVIGATED, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { RecipesService, selectRouteParam } from '@coderisland/home-cooked/shared/data-access';
import { Recipe } from '@coderisland/home-cooked/shared/models';
import { selectGuide } from './guides.actions';
import { of } from 'rxjs';
import { GuidesPartialState } from './guides.reducer';
import * as GuidesActions from './guides.actions';
import * as GuidesFeature from './guides.reducer';

@Injectable()
export class GuidesEffects {
  getOneRecipeFromRoute$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigationAction) => r.payload.routerState.url.startsWith('/guides/')),
      withLatestFrom(this.store.pipe(select(selectRouteParam('recipeGuideId'))), this.guidesStore),
      filter(([, recipeGuideId, guidesStore]) => !!recipeGuideId),
      mergeMap(([, recipeGuideId, guidesStore]) => {
        if (recipeGuideId && guidesStore[GuidesFeature.GUIDES_FEATURE_KEY].entities[recipeGuideId]) {
          return of(GuidesActions.loadOneRecipeGuideFromRouteSuccess({ recipeGuideId: recipeGuideId }));
        }
        return of(GuidesActions.loadOneRecipeGuideFromRouteFailure({ recipeGuideId: recipeGuideId! }));
      }),
    );
  });

  getOneRecipeFromAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GuidesActions.loadOneRecipeGuideFromRouteFailure.type),
      switchMap(({recipeGuideId}) => {
        return this.recipesService.getOne(recipeGuideId).pipe(map((recipeGuide: Recipe) => GuidesActions.loadOneRecipeGuideSuccess({ recipeGuide })))
      })
    );
  });

  constructor(private actions$: Actions, private store: Store, private recipesService: RecipesService, private guidesStore: Store<GuidesPartialState>) {}
}
