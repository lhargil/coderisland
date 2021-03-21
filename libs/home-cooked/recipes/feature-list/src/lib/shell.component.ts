import { Component, OnInit, ViewChild } from '@angular/core';
import { getAllRecipes, getRecipeSearch, getRecipesLoaded, RecipesPartialState } from '@coderisland/home-cooked/recipes/data-access';
import { select, Store } from '@ngrx/store';
import * as RecipesActions from '@coderisland/home-cooked/recipes/data-access';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { RecipeSearch } from '@coderisland/home-cooked/shared/models';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ListComponent } from './list.component';

@UntilDestroy()
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
  @ViewChild(ListComponent, { static: true}) listComponent!: ListComponent;
  readonly initialPage = 1;

  searchRecipesForm!: FormGroup;

  page$ = new BehaviorSubject(1);

  recipes$ = this.store.pipe(select(getAllRecipes));
  recipeSearch$ = this.store.pipe(select(getRecipeSearch));
  loading$ = this.store.pipe(
    select(getRecipesLoaded),
    map((loaded: boolean) => !loaded)
  );

  totalResults$ = this.recipeSearch$.pipe(map((recipeSearch) => recipeSearch.totalItems));
  isFirstPage$ = this.page$.pipe(map(page => page == 1));
  isLastPage$ = this.totalResults$.pipe(map(totalResults => totalResults == 0));

  constructor(private readonly store: Store<RecipesPartialState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(RecipesActions.init());

    this.recipeSearch$
    .pipe(untilDestroyed(this))
    .subscribe((recipeSearch: RecipeSearch) => {
      this.searchRecipesForm = this.listComponent.patchForm(recipeSearch.search);
    });

    combineLatest([
      this.searchRecipesForm.valueChanges.pipe(tap((_) => this.page$.next(this.initialPage))),
      this.page$,
    ])
      .pipe(
        map(([recipeSearch, page]) => {
          return {
            recipeSearch,
            page,
          };
        }),
        debounceTime(500),
        distinctUntilChanged(),
        tap(({ recipeSearch, page }) => {
          const searchData = { ...recipeSearch, limit: 10, page };
          this.store.dispatch(RecipesActions.searchRecipes({ recipeSearch: searchData }));
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  handlePageChangeClick(page: number) {
    let currentPage = this.page$.getValue() + page;
    if (currentPage <= 0) {
      currentPage = this.initialPage;
    }
    this.page$.next(currentPage);
  }
}
