import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Recipe } from '@coderisland/home-cooked/shared/models';

@Component({
  selector: 'hc-list',
  templateUrl: './list.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @Input()
  recipes: Recipe[] | null = [];
  constructor() { }

  ngOnInit(): void {
  }

}
