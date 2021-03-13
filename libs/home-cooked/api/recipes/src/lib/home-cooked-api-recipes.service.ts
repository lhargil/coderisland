import { Recipe } from '@coderisland/home-cooked/shared/models';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RecipeDocument, RecipeModel } from './schema/recipe.schema';

@Injectable()
export class HomeCookedApiRecipesService {
  constructor(@InjectModel(RecipeModel.name) private readonly recipeModel: Model<RecipeDocument>) {}

  getOne(id: string): Recipe | null | undefined {
    // const recipeToReturn = this.recipes.find((recipe: Recipe) => recipe.id == id);

    return null;
  }

  getAll(): Observable<any[]> {
    return from(this.recipeModel.find().limit(10).exec()).pipe(
      map((recipeDocuments: RecipeDocument[]) => {
        return recipeDocuments.map((recipeDocument: RecipeDocument) => {
          const { id, recipeTitle, recipeImage, recipeSummary, recipeBriefInformation, recipeTimes, recipeIngredients, recipeInstructions } = recipeDocument;

          return { id, recipeTitle, recipeImage, recipeSummary, recipeBriefInformation, recipeTimes, recipeIngredients, recipeInstructions };
        });
      }),
    );
  }
}
