import { Recipe } from "./recipe";
import { RecipeSearch } from "./recipe-search";

export interface PagedResult {
  recipes: Recipe[];
  recipeSearch: RecipeSearch;
}
