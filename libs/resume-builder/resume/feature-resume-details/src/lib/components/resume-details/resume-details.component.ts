import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }

}
