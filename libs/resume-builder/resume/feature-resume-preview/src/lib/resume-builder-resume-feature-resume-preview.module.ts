import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellPreviewComponent } from './containers/shell-preview/shell-preview.component';
import { PreviewComponent } from './components/preview/preview.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ShellPreviewComponent }
    ]),
  ],
  declarations: [ShellPreviewComponent, PreviewComponent],
  exports: [ShellPreviewComponent],
})
export class ResumeBuilderResumeFeatureResumePreviewModule {}
