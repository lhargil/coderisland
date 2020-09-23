import { Component, Input, OnInit } from '@angular/core';
import { ResumeSkill } from '@coderisland/resume-builder/domain/interfaces';
import { SlideInService } from '@coderisland/ui-kit/slide-in/service';
import { SlideInModes } from '@coderisland/ui-kit/slide-in/state';
import { ShellSkillsFormComponent } from '../shell-skills-form/shell-skills-form.component';

@Component({
  selector: 'resb-shell-skills',
  templateUrl: './shell-skills.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellSkillsComponent implements OnInit {
  @Input() resumeSkills!: ResumeSkill[];
  constructor(private slideInService: SlideInService) { }

  ngOnInit(): void {
  }

  addSkill() {
    console.log('hello');
    this.slideInService.show({
      heading: 'Add new skill',
      formData: {},
      modalMode: SlideInModes.Create,
      component: ShellSkillsFormComponent,
      handleSave: this.handleSave()
    });
  }

  editSkill(index: number) {
    this.slideInService.show({
      heading: 'Edit skill',
      formData: this.resumeSkills.find((_, i) => i == index),
      modalMode: SlideInModes.Update,
      component: ShellSkillsFormComponent,
      handleSave: this.handleSave()
    });
  }

  handleSave(): (eventData: any, afterSave?: () => void) => void {
    return (x) => {
      console.log('hello world');
    };
  }
}
