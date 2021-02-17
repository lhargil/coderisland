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
              import('@coderisland/omgimgflow/photos/feature-manage-edit').then(
                (module) => module.FeatureManageEditModule,
              ),
          },
          {
            path: 'create',
            loadChildren: () =>
              import('@coderisland/omgimgflow/photos/feature-manage-create').then(
                (module) => module.FeatureManageCreateModule,
              ),
          },
          {
            path: ':id/configure',
            loadChildren: () =>
              import('@coderisland/omgimgflow/photos/feature-configure').then((module) => module.FeatureConfigureModule),
          },
        ],
      },
    ]),
  ],
  declarations: [ShellComponent],
})
export class FeatureManageModule {}
