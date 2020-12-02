import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() addInterestClick = new EventEmitter<void>();
  @Output() editInterestClick = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  addInterest() {
    this.addInterestClick.emit();
  }

  editInterest(index: number) {
    this.editInterestClick.emit(index);
  }
}

