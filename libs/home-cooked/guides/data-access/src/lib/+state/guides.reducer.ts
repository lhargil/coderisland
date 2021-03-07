import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as GuidesActions from './guides.actions';
import { GuidesEntity } from './guides.models';
import { Recipe } from '@coderisland/home-cooked/shared/models';

export const GUIDES_FEATURE_KEY = 'guides';

export interface State extends EntityState<Recipe> {
  selectedId?: string | number; // which Guides record has been selected
  loaded: boolean; // has the Guides list been loaded
  error?: string | null; // last known error (if any)
}

export interface GuidesPartialState {
  readonly [GUIDES_FEATURE_KEY]: State;
}

export const guidesAdapter: EntityAdapter<Recipe> = createEntityAdapter<Recipe>();

export const initialState: State = guidesAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const guidesReducer = createReducer(
  initialState,
  on(GuidesActions.selectGuide, (state, action) => {
    return guidesAdapter.setOne(action.recipeGuide, {
      ...state,
      selectedId: action.id,
      loaded: true,
      error: null
    });
  })
);

export function reducer(state: State | undefined, action: Action) {
  return guidesReducer(state, action);
}
