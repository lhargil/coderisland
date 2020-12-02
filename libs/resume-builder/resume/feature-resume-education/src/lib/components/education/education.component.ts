import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ResumeEducation } from '@coderisland/resume-builder/domain/interfaces';

@Component({
  selector: 'resb-education',
  templateUrl: './education.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationComponent implements OnInit {
  @Input() resumeEducation!: ResumeEducation[];
  @Output() addEducationClick = new EventEmitter<void>();
  @Output() editEducationClick = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  addEducation() {
    this.addEducationClick.emit();
  }

  editEducation(index: number) {
    this.editEducationClick.emit(index);
  }
}
