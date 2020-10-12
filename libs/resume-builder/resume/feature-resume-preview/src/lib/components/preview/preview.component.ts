import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }

}
