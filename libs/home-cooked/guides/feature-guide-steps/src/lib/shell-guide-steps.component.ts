import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GuidesPartialState, getSelected } from '@coderisland/home-cooked/guides/data-access';

@Component({
  templateUrl: './shell-guide-steps.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellGuideStepsComponent implements OnInit {
  recipeGuide$ = this.store.pipe(select(getSelected))
  constructor(private readonly store: Store<GuidesPartialState>) { }

  ngOnInit(): void {
  }

}
