import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellConfigureComponent } from './configure/shell-configure.component';
import { ConfigureComponent } from './configure/configure.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfigureFormComponent } from './configure/configure-form.component';
import { OmgimgflowPhotosDomainModule } from '@coderisland/omgimgflow/photos/domain';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: ':id', pathMatch: 'full', component: ShellConfigureComponent }
    ]),
    ReactiveFormsModule
  ],
  declarations: [ShellConfigureComponent, ConfigureComponent, ConfigureFormComponent],
})
export class FeatureConfigureModule {}
