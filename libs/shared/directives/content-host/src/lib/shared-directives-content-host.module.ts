import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentHostDirective } from './content-host.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ContentHostDirective],
  exports: [ContentHostDirective],
})
export class SharedDirectivesContentHostModule {}
