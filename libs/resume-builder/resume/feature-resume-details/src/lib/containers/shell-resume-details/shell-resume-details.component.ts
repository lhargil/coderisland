import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Resume } from '@coderisland/resume-builder/domain/interfaces';
import { switchMap, tap } from 'rxjs/operators';
import { ResumeService } from '@coderisland/resume-builder/resume/data-access';

@Component({
  selector: 'resb-shell-resume-details',
  templateUrl: './shell-resume-details.component.html',
  styleUrls: ['./shell-resume-details.component.scss']
})
export class ShellResumeDetailsComponent implements OnInit {
  resume$ = this.activatedRoute.paramMap.pipe(
    switchMap((paramMap: ParamMap) => this.resumeService.getResume(paramMap.get('id') || ''))
  );
  constructor(private resumeService: ResumeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

  }
}
