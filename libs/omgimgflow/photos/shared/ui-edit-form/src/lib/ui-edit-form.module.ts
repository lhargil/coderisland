import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiEditFormComponent } from './ui-edit-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [UiEditFormComponent],
  exports: [UiEditFormComponent]
})
export class UiEditFormModule {}
