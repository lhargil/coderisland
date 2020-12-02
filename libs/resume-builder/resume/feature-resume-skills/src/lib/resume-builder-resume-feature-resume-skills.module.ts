import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellSkillsComponent } from './containers/shell-skills/shell-skills.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ShellSkillsFormComponent } from './containers/shell-skills-form/shell-skills-form.component';
import { SkillsFormComponent } from './components/skills-form/skills-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UiKitFormsTextInputModule } from '@coderisland/ui-kit/forms/text-input';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, UiKitFormsTextInputModule],
  declarations: [ShellSkillsComponent, SkillsComponent, ShellSkillsFormComponent, SkillsFormComponent],
  exports: [ShellSkillsComponent, ShellSkillsFormComponent],
})
export class ResumeBuilderResumeFeatureResumeSkillsModule {}
