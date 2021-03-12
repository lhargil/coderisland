import { Module } from '@nestjs/common';
import { HomeCookedApiRecipesService } from './home-cooked-api-recipes.service';
import { HomeCookedApiRecipesController } from './home-cooked-api-recipes.controller';

@Module({
  controllers: [HomeCookedApiRecipesController],
  providers: [HomeCookedApiRecipesService],
  exports: [HomeCookedApiRecipesService],
})
export class HomeCookedApiRecipesModule {}
