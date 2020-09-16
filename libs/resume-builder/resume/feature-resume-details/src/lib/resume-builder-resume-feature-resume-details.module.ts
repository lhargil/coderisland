import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellResumeDetailsComponent } from './containers/shell-resume-details/shell-resume-details.component';
import { ResumeDetailsComponent } from './components/resume-details/resume-details.component';
import { ComponentXComponent } from './component-x/component-x.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: ShellResumeDetailsComponent}
    ]),
  ],
  declarations: [ShellResumeDetailsComponent, ResumeDetailsComponent, ComponentXComponent],
  exports: [ComponentXComponent],
})
export class ResumeBuilderResumeFeatureResumeDetailsModule {}
