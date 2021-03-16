import { Module } from '@nestjs/common';
import { HomeCookedApiRecipesService } from './home-cooked-api-recipes.service';
import { HomeCookedApiRecipesController } from './home-cooked-api-recipes.controller';
import { RecipeModel, RecipeSchema } from './schema/recipe.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: RecipeModel.name, schema: RecipeSchema }])],
  controllers: [HomeCookedApiRecipesController],
  providers: [HomeCookedApiRecipesService],
  exports: [HomeCookedApiRecipesService],
})
export class HomeCookedApiRecipesModule {}
