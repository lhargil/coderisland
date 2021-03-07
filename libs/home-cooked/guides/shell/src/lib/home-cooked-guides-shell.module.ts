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
            path: ':id',
            loadChildren: () =>
              import('@coderisland/home-cooked/guides/feature-guide-steps').then(
                (module) => module.FeatureGuideStepsModule,
              ),
          },
        ],
      },
    ]),
  ],
  declarations: [ShellComponent],
})
export class HomeCookedGuidesShellModule {}
