import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'omgimg-shell-list',
  templateUrl: './shell-list.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
