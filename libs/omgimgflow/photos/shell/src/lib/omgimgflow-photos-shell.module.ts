import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(
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
          ],
        },
      ],
      { initialNavigation: 'enabled' }
  )],
  exports: [RouterModule],
  declarations: [LayoutComponent],
})
export class OmgimgflowPhotosShellModule {}
