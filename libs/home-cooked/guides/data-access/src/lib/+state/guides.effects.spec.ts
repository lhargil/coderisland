import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { GuidesEffects } from './guides.effects';
import * as GuidesActions from './guides.actions';
import { HttpClientModule } from '@angular/common/http';

describe('GuidesEffects', () => {
  let actions: Observable<any>;
  let effects: GuidesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot(), HttpClientModule],
      providers: [GuidesEffects, DataPersistence, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(GuidesEffects);
  });

  describe('getOneRecipeFromRoute$', () => {
    it('should work', () => {
      // TODO
      expect(true).toBeTruthy();
      // actions = hot('-a-|', { a: GuidesActions.() });

      // const expected = hot('-a-|', { a: GuidesActions.loadGuidesSuccess({ guides: [] }) });

      // expect(effects.init$).toBeObservable(expected);
    });
  });
});
