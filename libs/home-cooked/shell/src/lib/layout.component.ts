import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hc-layout',
  templateUrl: './layout.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class LayoutComponent implements OnInit {
  links = [];
  constructor() { }

  ngOnInit(): void {
  }

}
