import { Component, Input, OnInit } from '@angular/core';
import { ResumeSkill } from '@coderisland/resume-builder/domain/interfaces';

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
  constructor() { }

  ngOnInit(): void {
  }

}
