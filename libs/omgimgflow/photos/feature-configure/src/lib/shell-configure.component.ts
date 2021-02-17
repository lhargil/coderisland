import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'omgimg-shell-configure',
  templateUrl: './shell-configure.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellConfigureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
