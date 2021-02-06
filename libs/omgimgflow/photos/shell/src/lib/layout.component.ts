import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'coderisland-layout',
  templateUrl: './layout.component.html',
  styles: [
  ]
})
export class LayoutComponent implements OnInit {
  title = 'omgimgflow';
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
