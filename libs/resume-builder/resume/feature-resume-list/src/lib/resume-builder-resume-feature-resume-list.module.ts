import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellResumeListComponent } from './containers/shell-resume-list/shell-resume-list.component';
import { ResumeListComponent } from './components/resume-list/resume-list.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '', pathMatch: 'full', component: ShellResumeListComponent
      }
    ]),
  ],
  declarations: [ShellResumeListComponent, ResumeListComponent],
})
export class ResumeBuilderResumeFeatureResumeListModule {}
