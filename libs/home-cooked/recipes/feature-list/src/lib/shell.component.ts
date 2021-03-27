import { Component, OnInit, ViewChild } from '@angular/core';
import {
  getAllRecipes,
  getRecipeSearch,
  getRecipesLoaded,
  RecipesPartialState,
} from '@coderisland/home-cooked/recipes/data-access';
import { select, Store } from '@ngrx/store';
import * as RecipesActions from '@coderisland/home-cooked/recipes/data-access';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  scan,
  shareReplay,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { RecipeSearch } from '@coderisland/home-cooked/shared/models';
import { merge, Subject } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';
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
  @ViewChild(ListComponent, { static: true }) listComponent!: ListComponent;
  readonly initialPage = 1;

  localRecipeSearch: RecipeSearch | null = null;

  recipes$ = this.store.pipe(select(getAllRecipes));
  recipeSearch$ = this.store.pipe(
    select(getRecipeSearch),
    tap((recipeSearch) => (this.localRecipeSearch = recipeSearch)),
  );
  loading$ = this.store.pipe(
    select(getRecipesLoaded),
    map((loaded: boolean) => !loaded),
  );

  page$ = new Subject<number>();

  totalResults$ = this.recipeSearch$.pipe(map((recipeSearch) => recipeSearch.totalItems));
  isFirstPage$ = this.recipeSearch$.pipe(map((recipeSearch) => recipeSearch.page == this.initialPage));
  isLastPage$ = this.totalResults$.pipe(map((totalResults) => totalResults == 0));

  constructor(private readonly store: Store<RecipesPartialState>) {}

  ngOnInit(): void {
    this.store.dispatch(RecipesActions.init());
    merge(
      this.page$.pipe(map((page) => ({ page }))),
      this.listComponent.searchRecipesForm.valueChanges.pipe(
        distinctUntilChanged(),
        debounceTime(500),
        map((valueChanges) => ({ search: valueChanges.search, page: this.initialPage })),
      ),
    ).pipe(
      scan((prevState, command) => ({ ...prevState, ...command })),
      shareReplay(1),
      withLatestFrom(this.recipeSearch$),
      map(([current, fromStore]) => ({current, fromStore})),
      tap((state) => {
        this.store.dispatch(RecipesActions.searchRecipes({
          recipeSearch: {
            ...state.fromStore,
            ...state.current,
            limit: 10,
            totalItems: 1
          }
        }));
      })
    ).subscribe();
  }

  handlePageChangeClick(page: number) {
    let currentPage = (this.localRecipeSearch?.page || 1) + page;
    if (currentPage <= 0) {
      currentPage = this.initialPage;
    }
    this.page$.next(currentPage);
  }
}
