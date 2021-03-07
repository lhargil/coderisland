import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellGuideStepsComponent } from './shell-guide-steps.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ShellGuideStepsComponent,
      },
    ]),
  ],
  declarations: [ShellGuideStepsComponent],
})
export class FeatureGuideStepsModule {}
