import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellResumeDetailsComponent } from './containers/shell-resume-details/shell-resume-details.component';
import { ResumeDetailsComponent } from './components/resume-details/resume-details.component';
import { ResumeBuilderResumeUiProfileModule } from '@coderisland/resume-builder/resume/ui-profile';
import { ShellProfileFormComponent } from './containers/shell-profile-form/shell-profile-form.component';
import { ShellProfileDetailsComponent } from './containers/shell-profile-details/shell-profile-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: ShellResumeDetailsComponent}
    ]),
    ResumeBuilderResumeUiProfileModule
  ],
  declarations: [ShellResumeDetailsComponent, ResumeDetailsComponent, ShellProfileFormComponent, ShellProfileDetailsComponent],
  exports: [ShellProfileFormComponent, ShellProfileDetailsComponent]
})
export class ResumeBuilderResumeFeatureResumeDetailsModule {}
