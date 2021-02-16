import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellCreateComponent } from './shell-create.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: ShellCreateComponent}
    ]),
  ],
  declarations: [ShellCreateComponent],
})
export class FeatureManageCreateModule {}
