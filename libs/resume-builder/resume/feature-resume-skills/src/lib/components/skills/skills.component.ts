import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ResumeSkill } from '@coderisland/resume-builder/domain/interfaces';

@Component({
  selector: 'resb-skills',
  templateUrl: './skills.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent implements OnInit {
  @Input() resumeSkills!: ResumeSkill[];
  constructor() { }

  ngOnInit(): void {
  }

}
