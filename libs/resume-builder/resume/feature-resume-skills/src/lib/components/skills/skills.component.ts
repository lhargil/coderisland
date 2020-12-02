import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() addSkillClick = new EventEmitter<void>();
  @Output() editSkillClick = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  addSkill() {
    this.addSkillClick.emit();
  }

  editSkill(index: number) {
    this.editSkillClick.emit(index);
  }
}
