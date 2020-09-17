import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Resume } from '@coderisland/resume-builder/domain/interfaces';

@Component({
  selector: 'resb-resume-details',
  templateUrl: './resume-details.component.html',
  styleUrls: ['./resume-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResumeDetailsComponent implements OnInit {
  @Input()
  resume!: Resume;
  @Output()
  editClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  editProfile() {
    this.editClick.emit();
  }
}
