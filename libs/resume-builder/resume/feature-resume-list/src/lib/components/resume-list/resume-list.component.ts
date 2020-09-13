import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'resb-resume-list',
  templateUrl: './resume-list.component.html',
  styleUrls: ['./resume-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResumeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
