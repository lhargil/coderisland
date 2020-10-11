import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Resume } from '@coderisland/resume-builder/domain/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'resb-resume-list',
  templateUrl: './resume-list.component.html',
  styleUrls: ['./resume-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResumeListComponent implements OnInit {
  @Input() resumes: Observable<Resume[]>
  constructor() { }

  ngOnInit(): void {
  }

}
