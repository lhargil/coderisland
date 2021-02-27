import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './shell.component.html',
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
