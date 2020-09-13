import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellResumeEditComponent } from './containers/shell-resume-edit/shell-resume-edit.component';
import { ResumeEditComponent } from './components/resume-edit/resume-edit.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: ShellResumeEditComponent}
    ]),
  ],
  declarations: [ShellResumeEditComponent, ResumeEditComponent],
})
export class ResumeBuilderResumeFeatureResumeEditModule {}
