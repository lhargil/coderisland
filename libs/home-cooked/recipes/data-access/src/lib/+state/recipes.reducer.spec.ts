import { Recipe } from '@coderisland/home-cooked/shared/models';
import * as RecipesActions from './recipes.actions';
import { State, initialState, reducer } from './recipes.reducer';

describe('Recipes Reducer', () => {
  const createRecipe = (id: string, name = '') =>
    ({
      id: '',
      recipeTitle: '',
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

  beforeEach(() => {});

  describe('valid Recipes actions', () => {
    it('loadRecipesSuccess should return set the list of known Recipes', () => {
      const recipes = [createRecipe('PRODUCT-AAA'), createRecipe('PRODUCT-zzz')];
      const action = RecipesActions.loadRecipesSuccess({ recipes });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
