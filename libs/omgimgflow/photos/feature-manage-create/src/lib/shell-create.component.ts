import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './shell-create.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
