import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './shell-edit.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
