import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        loadChildren: () =>
          import('@coderisland/resume-builder/resume/feature-resume-list').then(
            (module) => module.ResumeBuilderResumeFeatureResumeListModule
          ),
      },
      {
        path: ':id/details',
        loadChildren: () =>
          import(
            '@coderisland/resume-builder/resume/feature-resume-details'
          ).then(
            (module) => module.ResumeBuilderResumeFeatureResumeDetailsModule
          ),
      }
    ]),
  ],
})
export class ResumeBuilderResumeShellResumeModule {}
