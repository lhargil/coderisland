import { Recipe, RecipeSearch } from '@coderisland/home-cooked/shared/models';
import { ArgumentMetadata, BadRequestException, Controller, Get, Injectable, Param, ParseIntPipe, PipeTransform, Query } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { HomeCookedApiRecipesService } from './home-cooked-api-recipes.service';

@Injectable()
export class ParseRecipeSearchQuery implements PipeTransform<RecipeSearch> {
  async transform(value: RecipeSearch, { metatype }: ArgumentMetadata) {
    const recipeSearch = {
      ...value,
      limit: Number(value.limit),
      page: Number(value.page)
    };
    return recipeSearch;
  }
}

@Controller('recipes')
export class HomeCookedApiRecipesController {
  constructor(private homeCookedApiRecipesService: HomeCookedApiRecipesService) {}

  @Get('query')
  getRecipes(@Query(new ParseRecipeSearchQuery()) recipeSearch: RecipeSearch) {
    return this.homeCookedApiRecipesService.getAll(recipeSearch);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.homeCookedApiRecipesService.getOne(id);
  }
}
