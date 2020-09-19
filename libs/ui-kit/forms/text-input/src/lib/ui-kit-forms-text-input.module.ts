import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [TextInputComponent],
  exports: [TextInputComponent],
})
export class UiKitFormsTextInputModule {}
