import { Injectable } from '@angular/core';
import { NavItem } from '../models';
import { ComponentStore } from '@ngrx/component-store';

interface UIState {
  navItems: NavItem[];
}

@Injectable({ providedIn: 'root' })
export class UiStore extends ComponentStore<UIState> {
  constructor() {
    super({
      navItems: [
        {
          path: 'recipes',
          label: 'Recipes',
        },
        {
          path: 'groceries',
          label: 'Groceries',
        },
        {
          path: 'meal-plan',
          label: 'Meal Plan',
        },
      ],
    });
  }

  readonly navItems$ = this.select(({ navItems }) => navItems);
}
