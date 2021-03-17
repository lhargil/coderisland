import { Component, OnInit } from '@angular/core';
import { getAllRecipes, getRecipeSearch, RecipesPartialState } from '@coderisland/home-cooked/recipes/data-access';
import { select, Store } from '@ngrx/store';
import * as RecipesActions from '@coderisland/home-cooked/recipes/data-access';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { RecipeSearch } from '@coderisland/home-cooked/shared/models';

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
  searchRecipesForm: FormGroup;
  categories = ['all', 'beef', 'pork'];

  recipes$ = this.store.pipe(select(getAllRecipes));
  constructor(private readonly store: Store<RecipesPartialState>, private readonly formBuilder: FormBuilder) {
    this.searchRecipesForm = this.formBuilder.group({
      search: [''],
      category: [''],
      page: [1],
      limit: [10],
    });
  }

  ngOnInit(): void {
    this.store.dispatch(RecipesActions.init());

    this.store.pipe(select(getRecipeSearch)).subscribe((recipeSearch: RecipeSearch) => {

      this.searchRecipesForm.patchValue(recipeSearch, { emitEvent: false });
    });
    this.searchRecipesForm.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap((recipeSearch: RecipeSearch) => this.store.dispatch(RecipesActions.searchRecipes({ recipeSearch }))),
      )
      .subscribe();
  }
}
