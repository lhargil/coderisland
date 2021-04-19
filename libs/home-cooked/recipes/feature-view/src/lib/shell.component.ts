import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as RecipesSelectors from '@coderisland/home-cooked/recipes/data-access';
import { RecipesPartialState } from '@coderisland/home-cooked/recipes/data-access';
import { Recipe } from '@coderisland/home-cooked/shared/models';
import { DialogService } from '@ngneat/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CookGuideComponent } from './cook-guide/cook-guide.component';

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
  recipe$: Observable<Recipe | null>;
  constructor(
    private readonly store: Store<RecipesPartialState>,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly dialogService: DialogService
  ) {
    this.recipe$ = this.store.pipe(select(RecipesSelectors.getOneRecipe));
  }

  ngOnInit(): void {
  }

  handleGoBack() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

  handleStartCooking(instructions: string[]) {
    const dialogRef = this.dialogService.open(CookGuideComponent, {
      data: instructions
    });

    dialogRef.afterClosed$.subscribe(result => {
      console.log(`After dialog has been closed ${result}`);
    });
  }
}
