import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as RecipesActions from './recipes.actions';
import { Recipe, RecipeSearch } from '@coderisland/home-cooked/shared/models';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';

export const RECIPES_FEATURE_KEY = 'recipes';

export interface State extends EntityState<Recipe> {
  selectedId?: string | number; // which Recipes record has been selected
  loaded: boolean; // has the Recipes list been loaded
  error?: string | null; // last known error (if any)
  recipeSearch: RecipeSearch
}

export interface RecipesPartialState {
  readonly [RECIPES_FEATURE_KEY]: State;
}

export const recipesAdapter: EntityAdapter<Recipe> = createEntityAdapter<Recipe>();

export const initialState: State = recipesAdapter.getInitialState({
  // set initial required properties
  loaded: true,
  recipeSearch: {
    search: '',
    page: 1,
    limit: 10,
    totalItems: 1
  }
});

const recipesReducer = createReducer(
  initialState,
  on(RecipesActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(RecipesActions.loadRecipesSuccess, (state, { recipes }) =>
    recipesAdapter.setAll(recipes, { ...state, loaded: true }),
  ),
  on(RecipesActions.loadRecipesFailure, (state, { error }) => ({ ...state, error })),
  on(RecipesActions.loadOneRecipeFromRouteSuccess, (state, {recipeId}) => ({...state, selectedId: recipeId})),
  on(RecipesActions.loadOneRecipeSuccess, (state, action) => {
    return recipesAdapter.setOne(action.recipe, {
      ...state,
      loaded: true,
      selectedId: action.recipe.id,
      error: null
    });
  }),
  on(RecipesActions.searchRecipes, (state) => ({ ...state, loaded: false, error: null })),
  on(RecipesActions.loadPagedRecipesSuccess, (state, action) =>
    recipesAdapter.setAll(action.pagedResult.recipes, {
    ...state, loaded: true, recipeSearch: action.pagedResult.recipeSearch }),
  )
);

export function reducer(state: State | undefined, action: Action) {
  return recipesReducer(state, action);
}
