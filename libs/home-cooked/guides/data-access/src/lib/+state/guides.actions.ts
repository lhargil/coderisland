import { createAction, props } from '@ngrx/store';
import { Recipe } from '@coderisland/home-cooked/shared/models';

export const selectGuide = createAction(
  '[Guides page] Select guide',
  props<{id: string | number, recipeGuide: Recipe}>()
);

