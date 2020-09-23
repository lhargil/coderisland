import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }

}
