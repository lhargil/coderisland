import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellListComponent } from './list/shell-list.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ShellListComponent,
      }
    ]),
  ],
  declarations: [ShellListComponent, ListComponent],
})
export class FeatureManageModule {}
