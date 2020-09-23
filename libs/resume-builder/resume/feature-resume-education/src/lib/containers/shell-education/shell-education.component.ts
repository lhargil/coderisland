import { Component, Input, OnInit } from '@angular/core';
import { ResumeEducation } from '@coderisland/resume-builder/domain/interfaces';
import { SlideInService } from '@coderisland/ui-kit/slide-in/service';
import { SlideInModes } from '@coderisland/ui-kit/slide-in/state';
import { ShellEducationFormComponent } from '../shell-education-form/shell-education-form.component';

@Component({
  selector: 'resb-shell-education',
  templateUrl: './shell-education.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellEducationComponent implements OnInit {
  @Input() resumeEducation!: ResumeEducation[];

  constructor(private slideInService: SlideInService) { }

  ngOnInit(): void {
  }

  addEducation() {
    this.slideInService.show({
      heading: 'Add new education',
      formData: {},
      modalMode: SlideInModes.Create,
      component: ShellEducationFormComponent,
      handleSave: this.handleSave(),
    });
  }

  editEducation(index: number) {
    this.slideInService.show({
      heading: 'Edit education',
      formData: this.resumeEducation.find((_, i) => i == index),
      modalMode: SlideInModes.Update,
      component: ShellEducationFormComponent,
      handleSave: this.handleSave()
    })
  }

  handleSave(): (eventData: any, afterSave?: () => void) => void {
    return (x) => {
      console.log('hello world');
    };
  }
}
