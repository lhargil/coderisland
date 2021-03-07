import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as RecipesSelectors from '@coderisland/home-cooked/recipes/data-access';
import { RecipesPartialState } from '@coderisland/home-cooked/recipes/data-access';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './shell.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ShellComponent implements OnInit {
  recipe$: Observable<any>;
  constructor(
    private readonly store: Store<RecipesPartialState>,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.recipe$ = this.store.pipe(select(RecipesSelectors.getSelectRecipe));
  }

  ngOnInit(): void {
  }

  handleGoBack() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }
}
