import { GuidesEntity } from './guides.models';
import * as GuidesActions from './guides.actions';
import { State, initialState, reducer } from './guides.reducer';

describe('Guides Reducer', () => {
  const createGuidesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as GuidesEntity);

  beforeEach(() => {});

  // describe('valid Guides actions', () => {
  //   it('loadGuidesSuccess should return set the list of known Guides', () => {
  //     const guides = [createGuidesEntity('PRODUCT-AAA'), createGuidesEntity('PRODUCT-zzz')];
  //     const action = GuidesActions.loadGuidesSuccess({ guides });

  //     const result: State = reducer(initialState, action);

  //     expect(result.loaded).toBe(true);
  //     expect(result.ids.length).toBe(2);
  //   });
  // });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
