import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HomeCookedShellUiNavBarModule } from '@coderisland/home-cooked/shell/ui/nav-bar';

@NgModule({
  imports: [
    CommonModule,
    HomeCookedShellUiNavBarModule
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class HomeCookedShellUiLayoutModule {}
