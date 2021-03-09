import { createAction, props } from '@ngrx/store';
import { Recipe } from '@coderisland/home-cooked/shared/models';

export const selectGuide = createAction(
  '[Guides page] Select guide',
  props<{id: string | number, recipeGuide: Recipe}>()
);

export const loadOneRecipeGuideFromRouteSuccess = createAction(
  '[Recipes/Guides Page] Load one recipe guide from route success',
  props<{recipeGuideId: string}>()
);

export const loadOneRecipeGuideFromRouteFailure = createAction(
  '[Recipes/Guides Page] Load one recipe guide from route failure',
  props<{recipeGuideId: string}>()
);

export const loadOneRecipeGuideSuccess = createAction(
  '[Recipes/API] Load one recipe from API success',
  props<{recipeGuide: Recipe}>()
);
