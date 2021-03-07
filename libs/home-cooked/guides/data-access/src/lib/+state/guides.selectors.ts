import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GUIDES_FEATURE_KEY, State, GuidesPartialState, guidesAdapter } from './guides.reducer';

// Lookup the 'Guides' feature state managed by NgRx
export const getGuidesState = createFeatureSelector<GuidesPartialState, State>(GUIDES_FEATURE_KEY);

const { selectAll, selectEntities } = guidesAdapter.getSelectors();

export const getGuidesLoaded = createSelector(getGuidesState, (state: State) => state.loaded);

export const getGuidesError = createSelector(getGuidesState, (state: State) => state.error);

export const getAllGuides = createSelector(getGuidesState, (state: State) => selectAll(state));

export const getGuidesEntities = createSelector(getGuidesState, (state: State) => selectEntities(state));

export const getSelectedId = createSelector(getGuidesState, (state: State) => state.selectedId);

export const getSelected = createSelector(
  getGuidesEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId],
);

