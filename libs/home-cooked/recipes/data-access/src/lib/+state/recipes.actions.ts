import { createAction, props } from '@ngrx/store';
import { Recipe } from '@coderisland/home-cooked/shared/models';

export const init = createAction('[Recipes/List Page] Init');

export const loadRecipesSuccess = createAction(
  '[Recipes/API] Load Recipes Success',
  props<{ recipes: Recipe[] }>(),
);

export const loadRecipesFailure = createAction('[Recipes/API] Load Recipes Failure', props<{ error: any }>());

/**
  [Recipes/View Page] Get Recipe
    - recipeId
 */
export const getRecipe = createAction(
  '[Recipes/View Page] Get Recipe',
  props<{ recipeId: string }>()
);
