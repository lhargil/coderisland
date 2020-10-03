import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ResumeReference } from '@coderisland/resume-builder/domain/interfaces';

@Component({
  selector: 'resb-references',
  templateUrl: './references.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReferencesComponent implements OnInit {
  @Input() resumeReferences!: ResumeReference[];

  constructor() { }

  ngOnInit(): void {
  }

  addReference() {
  }

  editReference(index: number) {

  }
}
