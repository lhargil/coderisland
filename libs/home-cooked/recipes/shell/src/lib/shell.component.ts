import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
