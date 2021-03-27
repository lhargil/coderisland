import { Component, OnInit } from '@angular/core';
import { RecipesPartialState } from '@coderisland/home-cooked/recipes/data-access';
import { Store } from '@ngrx/store';
import * as RecipesActions from '@coderisland/home-cooked/recipes/data-access';

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
