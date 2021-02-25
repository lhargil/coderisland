import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellCreateComponent } from './shell-create.component';
import { UiEditFormModule } from '@coderisland/omgimgflow/photos/shared/ui-edit-form';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: ShellCreateComponent}
    ]),
    UiEditFormModule,
    ReactiveFormsModule
  ],
  declarations: [ShellCreateComponent],
})
export class FeatureManageCreateModule {}
