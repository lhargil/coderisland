import { Injectable } from '@angular/core';
import { RecipesService } from '@coderisland/home-cooked/shared/data-access';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';

export class ViewState {
  recipe: any = {
    recipeTitle: '',
    recipeImage: '',
    recipeSummary: '',
    recipeBriefInformation: {
      course: '',
      cuisine: '',
      keyword: [''],
    },
    recipeTimes: { 'prep time': '', 'cook time': '' },
    recipeIngredients: [],
    recipeInstructions: [],
  };
}

@Injectable({ providedIn: 'root' })
export class ViewFacade {
  private viewState = new ViewState();
  private storeSubject = new BehaviorSubject<ViewState>(this.viewState);
  private store$ = this.storeSubject.asObservable();

  recipe$ = this.store$.pipe(
    map((state) => state.recipe),
    startWith({} as any),
  );

  constructor(private readonly recipesService: RecipesService) {}

  loadRecipe(selectedRecipe: Observable<string>) {
    selectedRecipe.pipe(switchMap((id: string) => this.recipesService.getOne(id))).subscribe((recipe: any) =>
      this.storeSubject.next(
        (this.viewState = {
          ...this.viewState,
          recipe,
        }),
      ),
    );
  }
}
