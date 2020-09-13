import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'resb-resume-details',
  templateUrl: './resume-details.component.html',
  styleUrls: ['./resume-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResumeDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
