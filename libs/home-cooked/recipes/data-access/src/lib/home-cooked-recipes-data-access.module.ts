import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromRecipes from './+state/recipes.reducer';
import { RecipesEffects } from './+state/recipes.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromRecipes.RECIPES_FEATURE_KEY, fromRecipes.reducer),
    EffectsModule.forFeature([RecipesEffects]),
  ],
  providers: [],
})
export class HomeCookedRecipesDataAccessModule {}
