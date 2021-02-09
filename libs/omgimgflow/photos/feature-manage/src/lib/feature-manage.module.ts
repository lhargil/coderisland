import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellListComponent } from './list/shell-list.component';
import { ListComponent } from './list/list.component';
import { ShellEditComponent } from './edit/shell-edit.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ShellListComponent,
      },
      {
        path: ':id/edit',
        component: ShellEditComponent
      }
    ]),
  ],
  declarations: [ShellListComponent, ListComponent, ShellEditComponent, EditComponent],
})
export class FeatureManageModule {}
