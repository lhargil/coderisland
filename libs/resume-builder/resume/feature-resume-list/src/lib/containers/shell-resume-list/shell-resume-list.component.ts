import { Component, OnInit } from '@angular/core';
import { ResumeService } from '@coderisland/resume-builder/resume/data-access';

@Component({
  selector: 'resb-shell-resume-list',
  templateUrl: './shell-resume-list.component.html',
  styleUrls: ['./shell-resume-list.component.scss']
})
export class ShellResumeListComponent implements OnInit {
  resumes$ = this.resumeService.getResumes();
  constructor(private readonly resumeService: ResumeService) { }

  ngOnInit(): void {
  }

}
