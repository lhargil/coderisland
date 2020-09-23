import { Component, Input, OnInit } from '@angular/core';
import { ResumeWorkExperience } from '@coderisland/resume-builder/domain/interfaces';
import { SlideInService } from '@coderisland/ui-kit/slide-in/service';
import { SlideInModes } from '@coderisland/ui-kit/slide-in/state';
import { ShellWorkExperienceFormComponent } from '../shell-work-experience-form/shell-work-experience-form.component';

@Component({
  selector: 'resb-shell-work-experience',
  templateUrl: './shell-work-experience.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellWorkExperienceComponent implements OnInit {
  @Input() resumeWorkExperience!: ResumeWorkExperience[];
  constructor(private slideInService: SlideInService) { }

  ngOnInit(): void {
  }

  addExperience() {
    this.slideInService.show({
      heading: 'Add new work experience',
      formData: {},
      modalMode: SlideInModes.Create,
      component: ShellWorkExperienceFormComponent,
      handleSave: this.handleSave(),
    });
  }

  editExperience(index: number) {
    this.slideInService.show({
      heading: 'Edit work experience',
      formData: this.resumeWorkExperience.find((_, i) => i == index),
      modalMode: SlideInModes.Update,
      component: ShellWorkExperienceFormComponent,
      handleSave: this.handleSave()
    })
  }

  handleSave(): (eventData: any, afterSave?: () => void) => void {
    return (x) => {
      console.log('hello world');
    };
  }
}
