import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hc-guide-step',
  templateUrl: './guide-step.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuideStepComponent implements OnInit {
  @Input() step!: string;
  @Output() navigate = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
}
