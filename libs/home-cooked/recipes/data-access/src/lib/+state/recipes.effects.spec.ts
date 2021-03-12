import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { RecipesEffects } from './recipes.effects';
import * as RecipesActions from './recipes.actions';
import { HttpClientModule } from '@angular/common/http';

describe('RecipesEffects', () => {
  let actions: Observable<any>;
  let effects: RecipesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot(), HttpClientModule],
      providers: [RecipesEffects, DataPersistence, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(RecipesEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      // TODO
      expect(true).toBeTruthy();
    });
  });
});
