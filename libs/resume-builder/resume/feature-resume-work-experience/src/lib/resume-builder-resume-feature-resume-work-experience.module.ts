import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellWorkExperienceComponent } from './containers/shell-work-experience/shell-work-experience.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ShellWorkExperienceComponent, WorkExperienceComponent],
  exports: [ShellWorkExperienceComponent],
})
export class ResumeBuilderResumeFeatureResumeWorkExperienceModule {}
