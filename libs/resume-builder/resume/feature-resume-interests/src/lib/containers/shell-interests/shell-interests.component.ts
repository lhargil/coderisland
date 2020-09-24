import { Component, Input, OnInit } from '@angular/core';
import { ResumeInterest } from '@coderisland/resume-builder/domain/interfaces';

@Component({
  selector: 'resb-shell-interests',
  templateUrl: './shell-interests.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellInterestsComponent implements OnInit {
  @Input() resumeInterests!: ResumeInterest[];
  constructor() { }

  ngOnInit(): void {
  }

}
