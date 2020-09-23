import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellEducationComponent } from './containers/shell-education/shell-education.component';
import { ShellEducationFormComponent } from './containers/shell-education-form/shell-education-form.component';
import { EducationFormComponent } from './components/education-form/education-form.component';
import { EducationComponent } from './components/education/education.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ShellEducationComponent, ShellEducationFormComponent, EducationFormComponent, EducationComponent],
  exports: [ShellEducationComponent, EducationComponent],
})
export class ResumeBuilderResumeFeatureResumeEducationModule {}
