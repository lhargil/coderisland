import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellResumeDetailsComponent } from './containers/shell-resume-details/shell-resume-details.component';
import { ResumeDetailsComponent } from './components/resume-details/resume-details.component';
import { ResumeBuilderResumeUiProfileModule } from '@coderisland/resume-builder/resume/ui-profile';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: ShellResumeDetailsComponent}
    ]),
    ResumeBuilderResumeUiProfileModule
  ],
  declarations: [ShellResumeDetailsComponent, ResumeDetailsComponent]
})
export class ResumeBuilderResumeFeatureResumeDetailsModule {}
