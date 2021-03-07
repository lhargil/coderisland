import { GuidesEntity } from './guides.models';
import { State, guidesAdapter, initialState } from './guides.reducer';
import * as GuidesSelectors from './guides.selectors';

describe('Guides Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getGuidesId = (it) => it['id'];
  const createGuidesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as GuidesEntity);

  let state;

  beforeEach(() => {
    state = {
      guides: guidesAdapter.setAll(
        [createGuidesEntity('PRODUCT-AAA'), createGuidesEntity('PRODUCT-BBB'), createGuidesEntity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        },
      ),
    };
  });

  describe('Guides Selectors', () => {
    it('getAllGuides() should return the list of Guides', () => {
      const results = GuidesSelectors.getAllGuides(state);
      const selId = getGuidesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = GuidesSelectors.getSelected(state);
      const selId = getGuidesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getGuidesLoaded() should return the current 'loaded' status", () => {
      const result = GuidesSelectors.getGuidesLoaded(state);

      expect(result).toBe(true);
    });

    it("getGuidesError() should return the current 'error' state", () => {
      const result = GuidesSelectors.getGuidesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
