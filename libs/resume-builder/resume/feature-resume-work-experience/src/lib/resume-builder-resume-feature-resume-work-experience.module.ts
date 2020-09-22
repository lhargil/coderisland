import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellWorkExperienceComponent } from './containers/shell-work-experience/shell-work-experience.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { ShellWorkExperienceFormComponent } from './containers/shell-work-experience-form/shell-work-experience-form.component';
import { WorkExperienceFormComponent } from './components/work-experience-form/work-experience-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UiKitFormsTextInputModule } from '@coderisland/ui-kit/forms/text-input';
import { UiKitFormsTextareaModule } from '@coderisland/ui-kit/forms/textarea';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, UiKitFormsTextInputModule, UiKitFormsTextareaModule],
  declarations: [ShellWorkExperienceComponent, WorkExperienceComponent, ShellWorkExperienceFormComponent, WorkExperienceFormComponent],
  exports: [ShellWorkExperienceComponent, ShellWorkExperienceFormComponent],
})
export class ResumeBuilderResumeFeatureResumeWorkExperienceModule {}
