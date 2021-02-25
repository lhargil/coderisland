import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellEditComponent } from './shell-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UiEditFormModule } from '@coderisland/omgimgflow/photos/shared/ui-edit-form'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', pathMatch: 'full', component: ShellEditComponent
      }
    ]),
    ReactiveFormsModule,
    UiEditFormModule
  ],
  declarations: [ShellEditComponent],
})
export class FeatureManageEditModule {}
