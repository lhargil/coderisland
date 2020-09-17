import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiProfileComponent } from './components/ui-profile/ui-profile.component';
import { UiProfileFormComponent } from './components/ui-profile-form/ui-profile-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiProfileComponent, UiProfileFormComponent],
  exports: [UiProfileComponent, UiProfileFormComponent],
})
export class ResumeBuilderResumeUiProfileModule {}
