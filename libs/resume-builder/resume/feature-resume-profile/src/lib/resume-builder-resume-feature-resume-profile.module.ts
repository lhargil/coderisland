import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellProfileFormComponent } from './containers/shell-profile-form/shell-profile-form.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { ShellProfileComponent } from './containers/shell-profile/shell-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UiKitFormsTextInputModule } from '@coderisland/ui-kit/forms/text-input';
import { UiKitFormsTextareaModule } from '@coderisland/ui-kit/forms/textarea';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, UiKitFormsTextInputModule, UiKitFormsTextareaModule],
  declarations: [ShellProfileFormComponent, ProfileFormComponent, ShellProfileComponent, ProfileComponent],
  exports: [ShellProfileFormComponent, ShellProfileComponent],
})
export class ResumeBuilderResumeFeatureResumeProfileModule {}
