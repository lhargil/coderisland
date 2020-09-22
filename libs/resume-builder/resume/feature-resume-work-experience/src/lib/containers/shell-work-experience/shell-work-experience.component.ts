import { Component, Input, OnInit } from '@angular/core';
import { ResumeWorkExperience } from '@coderisland/resume-builder/domain/interfaces';

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
  constructor() { }

  ngOnInit(): void {
  }

}
