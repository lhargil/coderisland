import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hc-guide-step',
  templateUrl: './guide-step.component.html',
  styles: [
    `
      :host {
        display: block;
        width: 100%;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuideStepComponent implements OnInit {
  @Input() step: string | null = null;
  @Output() navigate = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
}
