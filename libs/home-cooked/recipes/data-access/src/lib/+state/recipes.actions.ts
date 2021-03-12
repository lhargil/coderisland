import { createAction, props } from '@ngrx/store';
import { Recipe } from '@coderisland/home-cooked/shared/models';

export const init = createAction('[Recipes/List Page] Init');

export const loadRecipesSuccess = createAction(
  '[Recipes/API] Load Recipes Success',
  props<{ recipes: Recipe[] }>(),
);

export const loadRecipesFailure = createAction('[Recipes/API] Load Recipes Failure', props<{ error: any }>());

export const loadOneRecipeFromRouteSuccess = createAction(
  '[Recipes/View Page] Load one recipe from route success',
  props<{recipeId: string }>()
);

export const loadOneRecipeFromRouteFailure = createAction(
  '[Recipes/View Page] Load one recipe from route failure',
  props<{recipeId: string }>()
);

export const loadOneRecipeSuccess = createAction(
  '[Recipes/API] Load one recipe from API success',
  props<{recipe: Recipe}>()
);
