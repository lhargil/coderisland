import { Recipe, RecipeSearch } from '@coderisland/home-cooked/shared/models';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { HomeCookedApiRecipesService } from './home-cooked-api-recipes.service';

@Controller('recipes')
export class HomeCookedApiRecipesController {
  constructor(private homeCookedApiRecipesService: HomeCookedApiRecipesService) {}

  // @Get()
  // getAll() {
  //   return this.homeCookedApiRecipesService.getAll();
  // }

  @Get('query')
  getRecipes(@Query() recipeSearch: RecipeSearch) {
    return this.homeCookedApiRecipesService.getAll(recipeSearch);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.homeCookedApiRecipesService.getOne(id);
  }
}
