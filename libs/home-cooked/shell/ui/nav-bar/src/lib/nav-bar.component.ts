import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'hc-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent implements OnInit {
  links = [
    {
      path: 'recipes',
      label: 'Recipes',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
