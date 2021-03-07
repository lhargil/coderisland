import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as RecipesFeature from './recipes.reducer';
import * as RecipesActions from './recipes.actions';
import { RecipesService } from '@coderisland/home-cooked/shared/data-access';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class RecipesEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipesActions.init),
      tap(console.log),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return this.recipesService.getAll()
            .pipe(
              map((recipes) => RecipesActions.loadRecipesSuccess({ recipes }))
            );
        },

        onError: (action, error) => {
          console.error('Error', error);
          return RecipesActions.loadRecipesFailure({ error });
        },
      }),
    ),
  );

  constructor(private actions$: Actions, private readonly recipesService: RecipesService) {}
}
