import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'list',
          },
          {
            path: 'list',
            loadChildren: () =>
              import('@coderisland/omgimgflow/photos/feature-manage-list').then(
                (module) => module.FeatureManageListModule,
              ),
          },
          {
            path: ':id/edit',
            loadChildren: () =>
              import('@coderisland/omgimgflow/photos/feature-manage-edit').then((module) => module.FeatureManageEditModule),
          },
        ],
      },
    ]),
  ],
  declarations: [ShellComponent],
})
export class FeatureManageModule {}
