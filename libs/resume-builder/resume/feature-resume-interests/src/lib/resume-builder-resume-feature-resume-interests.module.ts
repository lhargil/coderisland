import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellInterestsComponent } from './containers/shell-interests/shell-interests.component';
import { InterestsComponent } from './components/interests/interests.component';
import { ShellInterestFormComponent } from './containers/shell-interest-form/shell-interest-form.component';
import { InterestFormComponent } from './components/interest-form/interest-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UiKitFormsTextInputModule } from '@coderisland/ui-kit/forms/text-input';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, UiKitFormsTextInputModule],
  declarations: [ShellInterestsComponent, InterestsComponent, ShellInterestFormComponent, InterestFormComponent],
  exports: [ShellInterestsComponent, ShellInterestFormComponent],
})
export class ResumeBuilderResumeFeatureResumeInterestsModule {}
