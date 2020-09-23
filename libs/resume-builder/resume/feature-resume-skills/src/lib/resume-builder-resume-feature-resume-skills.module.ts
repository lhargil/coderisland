import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellSkillsComponent } from './containers/shell-skills/shell-skills.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ShellSkillsComponent, SkillsComponent],
  exports: [ShellSkillsComponent],
})
export class ResumeBuilderResumeFeatureResumeSkillsModule {}
