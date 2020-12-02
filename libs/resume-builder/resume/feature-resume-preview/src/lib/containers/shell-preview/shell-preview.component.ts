import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ResumeService } from '@coderisland/resume-builder/resume/data-access';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'resb-shell-preview',
  templateUrl: './shell-preview.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellPreviewComponent implements OnInit {
  resume$ = this.activatedRoute.paramMap.pipe(
    switchMap((paramMap: ParamMap) => this.resumeService.getResume(paramMap.get('id') || ''))
  );
  constructor(private resumeService: ResumeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  printClicked() {
    window.print();
  }
}
