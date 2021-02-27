import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'hc-list',
  templateUrl: './list.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
