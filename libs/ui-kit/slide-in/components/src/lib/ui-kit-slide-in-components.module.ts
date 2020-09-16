import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideInShellComponent } from './slide-in-shell.component';
import { SharedDirectivesContentHostModule } from '@coderisland/shared/directives/content-host';
import { SlideInComponent } from './slide-in.component';

@NgModule({
  imports: [
    CommonModule,
    SharedDirectivesContentHostModule
  ],
  declarations: [SlideInShellComponent, SlideInComponent],
  exports: [SlideInShellComponent, SlideInComponent]
})
export class UiKitSlideInComponentsModule {}
