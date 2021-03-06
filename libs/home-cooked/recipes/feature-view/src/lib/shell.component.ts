import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ViewFacade } from '@coderisland/home-cooked/recipes/data-access';
import { map } from 'rxjs/operators';

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
  constructor(public readonly viewFacade: ViewFacade, private readonly activatedRoute: ActivatedRoute, private readonly router: Router) {}

  ngOnInit(): void {
    this.viewFacade.loadRecipe(
      this.activatedRoute.paramMap
        .pipe(
          map((paramMap: ParamMap) => (paramMap.get('id') || ''))
        ),
    );
  }

  handleGoBack() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }
}
