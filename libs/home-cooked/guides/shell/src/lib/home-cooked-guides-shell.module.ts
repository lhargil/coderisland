import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';
import { HomeCookedSharedDataAccessModule } from '@coderisland/home-cooked/shared/data-access';
import { HomeCookedGuidesDataAccessModule } from '@coderisland/home-cooked/guides/data-access';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellComponent,
        children: [
          {
            path: ':recipeGuideId',
            loadChildren: () =>
              import('@coderisland/home-cooked/guides/feature-guide-steps').then(
                (module) => module.FeatureGuideStepsModule,
              ),
          },
        ],
      },
    ]),
    HomeCookedSharedDataAccessModule,
    HomeCookedGuidesDataAccessModule
  ],
  declarations: [ShellComponent],
})
export class HomeCookedGuidesShellModule {}
