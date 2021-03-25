import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Recipe, RecipeSearch } from '@coderisland/home-cooked/shared/models';

@Component({
  selector: 'hc-list',
  templateUrl: './list.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  private _recipeSearch!: RecipeSearch | null;
  @Input()
  set recipeSearch(value: RecipeSearch | null) {
    this._recipeSearch = value;
    this.searchRecipesForm.patchValue({ search: value?.search }, { emitEvent: false });
  }
  get recipeSearch() {
    return this._recipeSearch;
  }

  @Input()
  recipes: Recipe[] | null = [];
  @Input()
  totalResults?: number | null;
  @Input()
  isFirstPage: boolean | null = true;
  @Input()
  isLastPage: boolean | null = false;
  @Output()
  pageChangeClick = new EventEmitter<number>();

  searchRecipesForm!: FormGroup;
  constructor(private readonly formBuilder: FormBuilder) {
    this.searchRecipesForm = this.formBuilder.group({
      search: [''],
    });
  }

  ngOnInit(): void {}

  handleNextClick() {
    this.pageChangeClick.emit(1);
  }

  handlePreviousClick() {
    this.pageChangeClick.emit(-1);
  }
}
