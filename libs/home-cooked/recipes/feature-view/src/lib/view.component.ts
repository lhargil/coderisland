import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '@coderisland/home-cooked/shared/models';

@Component({
  selector: 'hc-view',
  templateUrl: './view.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewComponent implements OnInit {
  @Input()
  recipe?: Recipe | null;

  @Output()
  goBack = new EventEmitter<void>();

  @Output()
  startCooking = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit(): void {
  }

  handleStartCooking() {
    this.startCooking.emit(this.recipe?.recipeInstructions);
  }
}
