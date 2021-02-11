import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellListComponent } from './list/shell-list.component';
import { ListComponent } from './list/list.component';
import { ShellEditComponent } from './edit/shell-edit.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShellCreateComponent } from './edit/shell-create.component';

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
      },
      {
        path: 'create',
        component: ShellCreateComponent
      }
    ]),
  ],
  declarations: [ShellListComponent, ListComponent, ShellEditComponent, EditComponent, ShellCreateComponent],
})
export class FeatureManageModule {}
