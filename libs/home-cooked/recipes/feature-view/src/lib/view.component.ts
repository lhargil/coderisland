import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
