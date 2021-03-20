import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Recipe } from '@coderisland/home-cooked/shared/models';

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

  patchForm(search = '') {
    this.searchRecipesForm.patchValue({ search }, { emitEvent: false });
    return this.searchRecipesForm;
  }

  handleNextClick() {
    this.pageChangeClick.emit(1);
  }

  handlePreviousClick() {
    this.pageChangeClick.emit(-1);
  }
}
