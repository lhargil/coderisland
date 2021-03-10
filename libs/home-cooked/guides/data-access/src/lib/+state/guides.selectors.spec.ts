import { Recipe } from '@coderisland/home-cooked/shared/models';
import { GuidesEntity } from './guides.models';
import { State, guidesAdapter, initialState } from './guides.reducer';
import * as GuidesSelectors from './guides.selectors';

describe('Guides Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getGuidesId = (it: any) => it['id'];
  const createGuidesEntity = (id: string, name = '') =>
    ({
      id,
      recipeTitle: name,
      recipeImage: '',
      recipeSummary: '',
      recipeBriefInformation: {
        course: '',
        cuisine: '',
        keyword: ['']
      },
      recipeTimes: {},
      recipeIngredients: [],
      recipeInstructions: [],
    } as Recipe);

  let state: any;

  // TODO: add test
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


    it('getSelected() should return the selected Entity', () => {
      const result = GuidesSelectors.getSelected(state);
      const selId = getGuidesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });
  });
});
