import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellInterestsComponent } from './containers/shell-interests/shell-interests.component';
import { InterestsComponent } from './components/interests/interests.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ShellInterestsComponent, InterestsComponent],
  exports: [ShellInterestsComponent],
})
export class ResumeBuilderResumeFeatureResumeInterestsModule {}
