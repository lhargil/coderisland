/**
 * Interface for the 'Recipes' data
 */
export interface Recipe {
  id: string | number; // Primary ID
  recipeTitle: string;
  recipeImage: string;
  recipeSummary: string;
  recipeBriefInformation: {
    course: string;
    cuisine: string;
    keyword: string[];
  };
  recipeTimes: {
    prepTime?: string;
    cookTime?: string;
    totalTime?: string;
  };
  recipeIngredients: { amount: number; unit: string | null; name: string; notes: string | null }[];
  recipeInstructions: string[];
}

export interface RecipeSearch {
  search: string;
  category: string;
  page: number;
  limit: number;
}

export interface PagedResult {
  recipes: Recipe[];
  recipeSearch: RecipeSearch;
}
