import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellConfigureComponent } from './shell-configure.component';
import { ConfigureFormComponent } from './configure-form.component';
import { ConfigurePreviewComponent } from './configure-preview.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: ShellConfigureComponent}
    ]),
  ],
  declarations: [ShellConfigureComponent, ConfigureFormComponent, ConfigurePreviewComponent],
})
export class FeatureConfigureModule {}
