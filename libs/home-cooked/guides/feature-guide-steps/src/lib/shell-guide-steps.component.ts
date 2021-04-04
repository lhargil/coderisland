import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GuidesPartialState, getSelected } from '@coderisland/home-cooked/guides/data-access';
import { Recipe } from '@coderisland/home-cooked/shared/models';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import { map, scan, startWith, tap } from 'rxjs/operators';

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
  private currentStep = 0;
  recipeGuide$ = this.store.pipe(select(getSelected));

  recipeGuideSteps$ = this.recipeGuide$.pipe(map((recipeGuide: Recipe | null | undefined) => {
    return recipeGuide?.recipeInstructions || [];
  }));

  lastStep$ = this.recipeGuideSteps$.pipe(
    map((guideSteps: string[]) => guideSteps.length - 1)
  );

  stepChange$ = new Subject<number>();

  currentStep$ = combineLatest([
    this.stepChange$.pipe(startWith(0)),
    this.lastStep$
  ]).pipe(
    map(([stepDirection, lastStep]) => {
      const step = this.currentStep + stepDirection;

      if (step < 0) {
        this.currentStep = 0;
      } else if (step > lastStep) {
        this.currentStep = lastStep;
      } else {
        this.currentStep = step;
      }
      return this.currentStep;
    })
  );

  currentGuideStep$ = combineLatest([
    this.recipeGuideSteps$,
    this.currentStep$
  ]).pipe(
    map(([recipeGuideSteps, currStep]: [string[], number]) => {
      return recipeGuideSteps[currStep];
    })
  );


  constructor(private readonly store: Store<GuidesPartialState>) {}

  ngOnInit(): void {
  }

  handleNavigate(stepDirection: number) {
    this.stepChange$.next(stepDirection);
  }
}
