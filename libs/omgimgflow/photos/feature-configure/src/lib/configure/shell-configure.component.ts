import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './shell-configure.component.html',
  styles: [
  ]
})
export class ShellConfigureComponent implements OnInit {
  imageUrl = 'https://localhost:5001/omgimages/light-em-up.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
