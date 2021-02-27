import { Injectable } from '@angular/core';
import { RecipesService } from '@coderisland/home-cooked/data-access';
import { BehaviorSubject } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';

export class ListState {
  recipes: any[] =  [];
}

@Injectable({providedIn: 'root'})
export class ListFacade {
  private listState = new ListState();
  private listStateSubject = new BehaviorSubject<ListState>(this.listState);
  private store$ = this.listStateSubject.asObservable();

  recipes$ = this.store$.pipe(
    map((state: any) => state.recipes),
    startWith([])
  );
  constructor(private readonly recipesService: RecipesService) { }

  loadRecipes() {
    this.recipesService.getAll()
      .pipe(tap(console.log))
      .subscribe((recipes: any[]) => this.listStateSubject.next(
        this.listState = {
          ...this.listState,
          recipes
        }
      ));
  }
}
