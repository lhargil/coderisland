import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { GuidesEffects } from './guides.effects';
import * as GuidesActions from './guides.actions';

describe('GuidesEffects', () => {
  let actions: Observable<any>;
  let effects: GuidesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [GuidesEffects, DataPersistence, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(GuidesEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: GuidesActions.init() });

      const expected = hot('-a-|', { a: GuidesActions.loadGuidesSuccess({ guides: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
