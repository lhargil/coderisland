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
  recipeBriefInformation: {
    course: string;
    cuisine: string;
    keyword: string[];
  };
  @Prop(
    raw({
      prepTime: { type: String },
      cookTime: { type: String },
      totalTime: { type: String },
    }),
  )
  recipeTimes: {
    prepTime?: string;
    cookTime?: string;
    totalTime?: string;
  };
  @Prop([raw({
    amount: { type: Number },
    unit: { type: String },
    name: { type: String },
    notes: { type: String }
  })])
  recipeIngredients: { amount: number; unit: string | null; name: string; notes: string | null }[];
  @Prop([String])
  recipeInstructions: string[];
}

export const RecipeSchema = SchemaFactory.createForClass(RecipeModel);
