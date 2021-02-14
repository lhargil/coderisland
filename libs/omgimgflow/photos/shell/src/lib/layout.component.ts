import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'omgimg',
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
  title = 'Welcome to omgimgflow!';
  links = [
    {
      path: 'home',
      label: 'Home',
    },
    {
      path: 'photos',
      label: 'Photos',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
