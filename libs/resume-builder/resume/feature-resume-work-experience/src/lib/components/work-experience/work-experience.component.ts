import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ResumeWorkExperience } from '@coderisland/resume-builder/domain/interfaces';

@Component({
  selector: 'resb-work-experience',
  templateUrl: './work-experience.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkExperienceComponent implements OnInit {
  @Input() resumeWorkExperience!: ResumeWorkExperience[];
  constructor() { }

  ngOnInit(): void {
  }

}
