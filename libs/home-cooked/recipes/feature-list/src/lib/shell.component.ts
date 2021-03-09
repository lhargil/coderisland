import { Component, OnInit } from '@angular/core';
import { getAllRecipes, RecipesPartialState } from '@coderisland/home-cooked/recipes/data-access';
import { select, Store } from '@ngrx/store';
import * as RecipesActions from '@coderisland/home-cooked/recipes/data-access';
import { Recipe } from '@coderisland/home-cooked/shared/models';
import { Observable } from 'rxjs';

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
  recipes$ = this.store.pipe(select(getAllRecipes));
  constructor(private readonly store: Store<RecipesPartialState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(RecipesActions.init());
  }

}
