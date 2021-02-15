import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellEditComponent } from './shell-edit.component';
import { EditFormComponent } from './edit-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', pathMatch: 'full', component: ShellEditComponent
      }
    ]),
    ReactiveFormsModule
  ],
  declarations: [ShellEditComponent, EditFormComponent],
})
export class FeatureManageEditModule {}
