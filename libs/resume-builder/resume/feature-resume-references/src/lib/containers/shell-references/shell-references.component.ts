import { Component, Input, OnInit } from '@angular/core';
import { ResumeReference } from '@coderisland/resume-builder/domain/interfaces';

@Component({
  selector: 'resb-shell-references',
  templateUrl: './shell-references.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellReferencesComponent implements OnInit {
  @Input()  resumeReferences!: ResumeReference[];
  constructor() { }

  ngOnInit(): void {
  }

}
