import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RecipeDocument = RecipeModel & Document;

@Schema({
  collection: 'recipes',
})
export class RecipeModel {
  @Prop()
  id: string;
  @Prop()
  recipeTitle: string;
  @Prop()
  recipeImage: string;
  @Prop()
  recipeSummary: string;
  @Prop(
    raw({
      course: { type: String },
      cuisine: { type: String },
      keyword: { type: [String] },
    }),
  )
  recipeBriefInformation: Record<string, any>;
  @Prop(
    raw({
      prepTime: { type: String },
      cookTime: { type: String },
      totalTime: { type: String },
    }),
  )
  recipeTimes: Record<string, any>;
  @Prop([raw({
    amount: { type: Number },
    unit: { type: String },
    name: { type: String },
    notes: { type: String }
  })])
  recipeIngredients: Record<string, any>[];
  @Prop([String])
  recipeInstructions: string[];
}

export const RecipeSchema = SchemaFactory.createForClass(RecipeModel);
