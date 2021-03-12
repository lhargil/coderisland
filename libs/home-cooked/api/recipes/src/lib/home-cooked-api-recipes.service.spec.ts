import { Test } from '@nestjs/testing';
import { HomeCookedApiRecipesService } from './home-cooked-api-recipes.service';

describe('HomeCookedApiRecipesService', () => {
  let service: HomeCookedApiRecipesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [HomeCookedApiRecipesService],
    }).compile();

    service = module.get(HomeCookedApiRecipesService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
