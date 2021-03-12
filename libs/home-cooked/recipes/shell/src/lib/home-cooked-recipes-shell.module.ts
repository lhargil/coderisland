import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';
import { HomeCookedRecipesDataAccessModule } from '@coderisland/home-cooked/recipes/data-access';
import { HomeCookedSharedDataAccessModule } from '@coderisland/home-cooked/shared/data-access';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            loadChildren: () =>
              import('@coderisland/home-cooked/recipes/feature-list').then((module) => module.FeatureListModule),
          },
          {
            path: ':recipeId',
            loadChildren: () =>
              import('@coderisland/home-cooked/recipes/feature-view').then((module) => module.FeatureViewModule),
          },
        ],
      },
    ]),
    HomeCookedSharedDataAccessModule,
    HomeCookedRecipesDataAccessModule
  ],
  declarations: [ShellComponent],
})
export class HomeCookedRecipesShellModule {}
