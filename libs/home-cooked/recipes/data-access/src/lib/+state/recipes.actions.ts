import { createAction, props } from '@ngrx/store';
import { PagedResult, Recipe, RecipeSearch } from '@coderisland/home-cooked/shared/models';

export const init = createAction('[Recipes/List Page] Init');

export const loadRecipesSuccess = createAction('[Recipes/API] Load Recipes Success', props<{ recipes: Recipe[] }>());

export const loadRecipesFailure = createAction('[Recipes/API] Load Recipes Failure', props<{ error: any }>());

export const loadOneRecipeFromRouteSuccess = createAction(
  '[Recipes/View Page] Load one recipe from route success',
  props<{ recipeId: string }>(),
);

export const loadOneRecipeFromRouteFailure = createAction(
  '[Recipes/View Page] Load one recipe from route failure',
  props<{ recipeId: string }>(),
);

export const loadOneRecipeSuccess = createAction(
  '[Recipes/API] Load one recipe from API success',
  props<{ recipe: Recipe }>(),
);

export const searchRecipes = createAction(
  '[Recipes/List Page] Search recipes',
  props<{ recipeSearch: RecipeSearch }>(),
);

export const loadPagedRecipesSuccess = createAction(
  '[Recipes/API] Load paged recipes success',
  props<{ pagedResult: PagedResult }>(),
);

export const loadPagedRecipesFailure = createAction(
  '[Recipes/API] Load paged recipes failure',
  props<{ error: any }>(),
);
