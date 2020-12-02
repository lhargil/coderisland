import { Component, Input, OnInit } from '@angular/core';
import { ResumeInterest } from '@coderisland/resume-builder/domain/interfaces';
import { SlideInService } from '@coderisland/ui-kit/slide-in/service';
import { SlideInModes } from '@coderisland/ui-kit/slide-in/state';
import { ShellInterestFormComponent } from '../shell-interest-form/shell-interest-form.component';

@Component({
  selector: 'resb-shell-interests',
  templateUrl: './shell-interests.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ShellInterestsComponent implements OnInit {
  @Input() resumeInterests!: ResumeInterest[];
  constructor(private slideInService: SlideInService) {}

  ngOnInit(): void {}

  addInterest() {
    this.slideInService.show({
      heading: 'Add new interest',
      formData: {},
      modalMode: SlideInModes.Create,
      component: ShellInterestFormComponent,
      handleSave: this.handleSave(),
    });
  }

  editInterest(index: number) {
    this.slideInService.show({
      heading: 'Edit interest',
      formData: this.resumeInterests.find((_, i) => i == index),
      modalMode: SlideInModes.Update,
      component: ShellInterestFormComponent,
      handleSave: this.handleSave(),
    });
  }

  handleSave(): (eventData: any, afterSave?: () => void) => void {
    return (x) => {
      console.log('hello world');
    };
  }
}
