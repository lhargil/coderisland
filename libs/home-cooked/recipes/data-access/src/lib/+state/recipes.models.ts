/**
 * Interface for the 'Recipes' data
 */
export interface RecipesEntity {
  id: string | number; // Primary ID
  recipeTitle: string;
  recipeImage: string;
  recipeSummary: string;
  recipeBriefInformation: {
    course: string;
    cuisine: string;
    keyword: string[];
  },
  recipeTimes: { [key: string]: string},
  recipeIngredients: [],
  recipeInstructions: [],
}
