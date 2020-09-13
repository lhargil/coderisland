import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resume } from '@coderisland/shared/resume-builder/domain/interfaces';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'resb-shell-resume-details',
  templateUrl: './shell-resume-details.component.html',
  styleUrls: ['./shell-resume-details.component.scss']
})
export class ShellResumeDetailsComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<Resume>('/api')
      .pipe(tap(console.log))
      .subscribe();
  }
}
