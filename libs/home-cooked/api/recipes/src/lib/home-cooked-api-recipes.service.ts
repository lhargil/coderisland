import { PagedResult, Recipe, RecipeSearch } from '@coderisland/home-cooked/shared/models';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RecipeDocument, RecipeModel } from './schema/recipe.schema';

@Injectable()
export class HomeCookedApiRecipesService {
  constructor(@InjectModel(RecipeModel.name) private readonly recipeModel: Model<RecipeDocument>) {}

  getOne(id: string): Observable<Recipe | null> {
    const recipeToReturn = from(this.recipeModel.findOne({id}).exec())
      .pipe(
        map((recipeDocument: RecipeDocument | null) => {
          if (!recipeDocument) {
            return null;
          }

          const { id, recipeTitle, recipeImage, recipeSummary, recipeBriefInformation, recipeTimes, recipeIngredients, recipeInstructions } = recipeDocument;

          return { id, recipeTitle, recipeImage, recipeSummary, recipeBriefInformation, recipeTimes, recipeIngredients, recipeInstructions };
        })
      );

    return recipeToReturn;
  }

  getAll(recipeSearch: RecipeSearch): Observable<PagedResult> {
    return from(this.recipeModel.find({$text: {$search: recipeSearch.search }}).limit(recipeSearch.limit).exec()).pipe(
      map((recipeDocuments: RecipeDocument[]) => {
        return recipeDocuments.map((recipeDocument: RecipeDocument) => {
          const { id, recipeTitle, recipeImage, recipeSummary, recipeBriefInformation, recipeTimes, recipeIngredients, recipeInstructions } = recipeDocument;

          return { id, recipeTitle, recipeImage, recipeSummary, recipeBriefInformation, recipeTimes, recipeIngredients, recipeInstructions };
        });
      }),
      map((recipes: Recipe[]) => {
        return {
          recipes,
          recipeSearch
        }
      })
    );
  }
}
