import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: LayoutComponent,
          children: [
            {
              path: '',
              pathMatch: 'full',
              redirectTo: '/',
            },
            {
              path: 'photos',
              loadChildren: () =>
                import('@coderisland/omgimgflow/photos/feature-manage').then(
                  (module) => module.FeatureManageModule
                ),
            },
          ],
        },
      ],
      { initialNavigation: 'enabled' }
    ),
  ],
  declarations: [LayoutComponent],
  exports: [RouterModule],
})
export class OmgimgflowPhotosShellModule {}
