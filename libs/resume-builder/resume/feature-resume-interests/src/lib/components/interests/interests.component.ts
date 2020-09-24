import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ResumeInterest } from '@coderisland/resume-builder/domain/interfaces';

@Component({
  selector: 'resb-interests',
  templateUrl: './interests.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InterestsComponent implements OnInit {
  @Input() resumeInterests!: ResumeInterest[];
  constructor() { }

  ngOnInit(): void {
  }

}
