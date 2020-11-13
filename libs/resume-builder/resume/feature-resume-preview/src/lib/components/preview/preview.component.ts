import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Resume } from '@coderisland/resume-builder/domain/interfaces';

@Component({
  selector: 'resb-preview',
  templateUrl: './preview.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewComponent implements OnInit {
  @Input() resume!: Resume;
  @Output() clickPrint = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  print() {
    this.clickPrint.emit();
  }
}
