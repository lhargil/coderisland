import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() addReferenceClick = new EventEmitter<void>();
  @Output() editReferenceClick = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  addReference() {
    this.addReferenceClick.emit();
  }

  editReference(index: number) {
    this.editReferenceClick.emit(index);
  }
}
