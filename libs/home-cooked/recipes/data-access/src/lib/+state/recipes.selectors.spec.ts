import { Recipe } from '@coderisland/home-cooked/shared/models';
import { State, recipesAdapter, initialState } from './recipes.reducer';
import * as RecipesSelectors from './recipes.selectors';

describe('Recipes Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getRecipesId = (it: any) => it['id'];
  const createRecipe = (id: string, name = '') =>
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

  beforeEach(() => {
    state = {
      recipes: recipesAdapter.setAll(
        [createRecipe('PRODUCT-AAA'), createRecipe('PRODUCT-BBB'), createRecipe('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        },
      ),
    };
  });

  describe('Recipes Selectors', () => {
    it('getAllRecipes() should return the list of Recipes', () => {
      const results = RecipesSelectors.getAllRecipes(state);
      const selId = getRecipesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    // it('getSelected() should return the selected Entity', () => {
    //   const result = RecipesSelectors.getSelected(state);
    //   const selId = getRecipesId(result);

    //   expect(selId).toBe('PRODUCT-BBB');
    // });

    // it("getRecipesLoaded() should return the current 'loaded' status", () => {
    //   const result = RecipesSelectors.getRecipesLoaded(state);

    //   expect(result).toBe(true);
    // });

    // it("getRecipesError() should return the current 'error' state", () => {
    //   const result = RecipesSelectors.getRecipesError(state);

    //   expect(result).toBe(ERROR_MSG);
    // });
  });
});
