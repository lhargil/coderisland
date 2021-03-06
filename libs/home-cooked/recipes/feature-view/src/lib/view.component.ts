import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hc-view',
  templateUrl: './view.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewComponent implements OnInit {
  @Input()
  recipe: any | null;

  @Output()
  goBack = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

}
