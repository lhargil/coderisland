import { Recipe } from '@coderisland/home-cooked/shared/models';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeCookedApiRecipesService {
  recipes: Recipe[] = [
      {
        id: '018ad893-b3b4-49a3-aa1c-2cf317295fc7',
        recipeTitle: 'Pata Pochero',
        recipeImage: '/omgimages/home-cooked/pata-pochero-360x361.jpg',
        recipeSummary: 'Pork hock stew with chorizo.',
        recipeBriefInformation: {
          course: 'Main Course',
          cuisine: 'Filipino',
          keyword: ['chicken pochero', 'pata', 'pork stew'],
        },
        recipeTimes: { prepTime: '5 minutes', cookTime: '1 hour 30 minutes' },
        recipeIngredients: [
          { amount: 0.6, unit: 'lbs', name: 'pork pata', notes: 'boiled for 15 minutes' },
          { amount: 1, unit: 'piece', name: 'Chorizo de Bilbao', notes: null },
          { amount: 2, unit: 'pieces', name: 'saba banana', notes: 'sliced' },
          { amount: 2, unit: 'pieces', name: 'potato', notes: 'quartered' },
          { amount: 0.5, unit: 'piece', name: 'cabbage', notes: 'quartered' },
          { amount: 10, unit: 'pieces', name: 'long green beans', notes: null },
          { amount: 0.4, unit: 'cups', name: 'garbanzos', notes: null },
          { amount: 1, unit: 'piece', name: 'onion', notes: 'chopped' },
          { amount: 1, unit: 'piece', name: 'tomato', notes: 'diced' },
          { amount: 5, unit: 'cloves', name: 'garlic', notes: 'chopped' },
          { amount: 8, unit: 'ounces', name: 'tomato sauce', notes: null },
          { amount: 4, unit: 'cups', name: 'water', notes: null },
          { amount: 0, unit: null, name: 'Patis and ground black pepper', notes: null },
          { amount: 3, unit: 'tablespoons', name: 'cooking oil', notes: null },
        ],
        recipeInstructions: [
          'Heat oil in a wok. Sauté onion for 30 seconds. Add garlic. Sauté for 20 seconds, and then add tomato. Sauté until the onion softens.',
          'Add chorizo. Cook for 2 minutes.',
          'Add pata (pork leg), fish sauce, tomato sauce, and water. Let boil. Cook for 1 to 1 ½ hours between low to medium heat. Note: add water as needed.',
          'Add banana, potato, and garbanzos. Cook for 5 to 8 minutes.',
          'Season with salt and ground black pepper.',
          'Put the cabbage and long green beans into the wok. Cover and cook for 3 to 5 minutes.',
          'Add bok choy. Cook for 3 minutes.',
          'Transfer to a serving bowl. Serve with warm rice.',
          'Share and enjoy!',
        ],
      },
    ];

  getOne(id: string): Recipe | null | undefined {
    const recipeToReturn = this.recipes.find((recipe: Recipe) => recipe.id == id);

    return recipeToReturn;
  }

  getAll() {
    return this.recipes;
  }
}
