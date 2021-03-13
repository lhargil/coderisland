import { Controller, Get, Param } from '@nestjs/common';
import { HomeCookedApiRecipesService } from './home-cooked-api-recipes.service';

@Controller('recipes')
export class HomeCookedApiRecipesController {
  constructor(private homeCookedApiRecipesService: HomeCookedApiRecipesService) {}

  @Get()
  getAll() {
    return this.homeCookedApiRecipesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.homeCookedApiRecipesService.getOne(id);
  }
}
