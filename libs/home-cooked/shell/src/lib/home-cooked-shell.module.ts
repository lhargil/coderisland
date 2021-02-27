import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule.forRoot([
    {
      path: '',
      component: LayoutComponent
    }
  ], { initialNavigation: 'enabled' })],
  exports: [RouterModule],
  declarations: [LayoutComponent],
})
export class HomeCookedShellModule {}
