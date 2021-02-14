import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellListComponent } from './shell-list.component';
import { ListComponent } from './list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: ShellListComponent}
    ]),
    ReactiveFormsModule
  ],
  declarations: [ShellListComponent, ListComponent],
})
export class FeatureManageListModule {}
