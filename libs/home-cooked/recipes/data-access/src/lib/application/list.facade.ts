import { Injectable, OnDestroy } from '@angular/core';
import { RecipesService } from '@coderisland/home-cooked/shared/data-access';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, startWith, takeUntil, tap } from 'rxjs/operators';

export class ListState {
  recipes: any[] = [];
}

@Injectable({ providedIn: 'root' })
export class ListFacade implements OnDestroy {
  private listState = new ListState();
  private listStateSubject = new BehaviorSubject<ListState>(this.listState);
  private store$ = this.listStateSubject.asObservable();

  private destroySubject = new Subject<void>();
  private destroy$ = this.destroySubject.asObservable();

  recipes$ = this.store$.pipe(
    map((state: any) => state.recipes),
    startWith([]),
  );
  constructor(private readonly recipesService: RecipesService) {}

  ngOnDestroy() {}

  loadRecipes() {
    this.recipesService
      .getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe((recipes: any[]) =>
        this.listStateSubject.next(
          (this.listState = {
            ...this.listState,
            recipes,
          }),
        ),
      );
  }
}
