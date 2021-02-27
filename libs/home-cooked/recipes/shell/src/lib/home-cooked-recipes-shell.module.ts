import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';

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
            path: ':id',
            loadChildren: () =>
              import('@coderisland/home-cooked/recipes/feature-view').then((module) => module.FeatureViewModule),
          },
        ],
      },
    ]),
  ],
  declarations: [ShellComponent],
})
export class HomeCookedRecipesShellModule {}
