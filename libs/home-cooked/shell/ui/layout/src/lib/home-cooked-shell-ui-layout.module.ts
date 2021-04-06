import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HomeCookedShellUiNavBarModule } from '@coderisland/home-cooked/shell/ui/nav-bar';
import { HomeCookedShellUiMainViewModule } from '@coderisland/home-cooked/shell/ui/main-view';
import { HomeCookedShellUiFooterModule } from '@coderisland/home-cooked/shell/ui/footer';
import { DialogModule } from '@ngneat/dialog';

@NgModule({
  imports: [
    CommonModule,
    HomeCookedShellUiNavBarModule,
    HomeCookedShellUiMainViewModule,
    HomeCookedShellUiFooterModule,
    DialogModule
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class HomeCookedShellUiLayoutModule {}
