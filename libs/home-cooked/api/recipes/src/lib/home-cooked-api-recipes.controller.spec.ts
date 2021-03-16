import { Test } from '@nestjs/testing';
import { HomeCookedApiRecipesController } from './home-cooked-api-recipes.controller';
import { HomeCookedApiRecipesService } from './home-cooked-api-recipes.service';

describe('HomeCookedApiRecipesController', () => {
  let controller: HomeCookedApiRecipesController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [HomeCookedApiRecipesService],
      controllers: [HomeCookedApiRecipesController],
    }).compile();

    controller = module.get(HomeCookedApiRecipesController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
