import { Component, OnInit } from '@angular/core';
import { ListFacade, RecipesFacade } from '@coderisland/home-cooked/recipes/data-access';
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
  recipes$ = this.recipesFacade.allRecipes$ as Observable<any[]>;
  constructor(private readonly recipesFacade: RecipesFacade) { }

  ngOnInit(): void {
    this.recipesFacade.init();
  }

}
