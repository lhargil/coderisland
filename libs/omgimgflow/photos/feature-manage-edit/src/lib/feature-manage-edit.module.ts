import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellEditComponent } from './shell-edit.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', pathMatch: 'full', component: ShellEditComponent
      }
    ]),
  ],
  declarations: [ShellEditComponent],
})
export class FeatureManageEditModule {}
