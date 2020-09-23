import { Component, Input, OnInit } from '@angular/core';
import { ResumeEducation } from '@coderisland/resume-builder/domain/interfaces';

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

  constructor() { }

  ngOnInit(): void {
  }

}
