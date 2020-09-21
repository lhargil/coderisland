import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellResumeDetailsComponent } from './containers/shell-resume-details/shell-resume-details.component';
import { ResumeDetailsComponent } from './components/resume-details/resume-details.component';
import { ResumeBuilderResumeUiProfileModule } from '@coderisland/resume-builder/resume/ui-profile';
import { ShellProfileFormComponent } from './containers/shell-profile-form/shell-profile-form.component';
import { ShellProfileDetailsComponent } from './containers/shell-profile-details/shell-profile-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShellProfileSocialNetworksFormComponent } from './containers/shell-profile-social-networks-form/shell-profile-social-networks-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: ShellResumeDetailsComponent}
    ]),
    ResumeBuilderResumeUiProfileModule
  ],
  declarations: [ShellResumeDetailsComponent, ResumeDetailsComponent, ShellProfileFormComponent, ShellProfileDetailsComponent, ShellProfileSocialNetworksFormComponent],
  exports: [ShellProfileFormComponent, ShellProfileDetailsComponent, ShellProfileSocialNetworksFormComponent]
})
export class ResumeBuilderResumeFeatureResumeDetailsModule {}
