import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GuidesPartialState, getSelected } from '@coderisland/home-cooked/guides/data-access';
import { Recipe } from '@coderisland/home-cooked/shared/models';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './shell-guide-steps.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ShellGuideStepsComponent implements OnInit {
  recipeGuide$: Observable<Recipe | null | undefined>;
  recipeSteps: string[] = [];
  currentStep = 0;
  constructor(private readonly store: Store<GuidesPartialState>) {
    this.recipeGuide$ = this.store.pipe(select(getSelected));
  }

  ngOnInit(): void {
    this.recipeGuide$.subscribe((guide: Recipe | null | undefined) => {
      console.log(guide?.recipeInstructions);
      this.recipeSteps = guide?.recipeInstructions || [];
    });
  }

  handleNavigate(stepDirection: number) {
    if (stepDirection < 0 && this.currentStep == 0) {
      return;
    }

    if (stepDirection > 0 && this.currentStep >= this.recipeSteps.length - 1) {
      return;
    }

    this.currentStep += stepDirection;
  }
}
