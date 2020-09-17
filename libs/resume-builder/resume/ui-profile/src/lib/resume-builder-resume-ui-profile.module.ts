import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiProfileComponent } from './components/ui-profile/ui-profile.component';
import { ShellUiProfileComponent } from './containers/shell-ui-profile/shell-ui-profile.component';
import { ShellUiProfileFormComponent } from './containers/shell-ui-profile-form/shell-ui-profile-form.component';
import { UiProfileFormComponent } from './components/ui-profile-form/ui-profile-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiProfileComponent, ShellUiProfileComponent, ShellUiProfileFormComponent, UiProfileFormComponent],
  exports: [UiProfileComponent, ShellUiProfileComponent, ShellUiProfileFormComponent, UiProfileFormComponent],
})
export class ResumeBuilderResumeUiProfileModule {}
