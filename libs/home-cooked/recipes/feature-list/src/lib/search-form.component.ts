import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'hc-search-form',
  templateUrl: './search-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFormComponent implements OnInit {
  @Output() recipeSearch = new EventEmitter<any>();
  searchRecipesForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.searchRecipesForm = this.formBuilder.group({
      searchKeywords: [''],
      searchCategory: ['']
    });
  }

  ngOnInit(): void {
  }

}
