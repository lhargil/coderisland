import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellConfigureComponent } from './configure/shell-configure.component';
import { ConfigureComponent } from './configure/configure.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: ':id', pathMatch: 'full', component: ShellConfigureComponent }
    ]),
  ],
  declarations: [ShellConfigureComponent, ConfigureComponent],
})
export class FeatureConfigureModule {}
