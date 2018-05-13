import reducer from '../../../app/redux/reducers/sideMenu';
import {
  defaultState,
  open,
  close
} from '../../../__mocks__/redux/sideMenu';

import {
  OPEN_SIDE_MENU,
  CLOSE_SIDE_MENU,
  TOGGLE_SIDE_MENU
} from '../../../app/redux/actions/types';

describe('Reducer: Sidemenu', () => {

  it('should return initialState', () => {
    expect(reducer(undefined, {}).equals(defaultState))
      .toBeTruthy();
  });

  it('should handle OPEN_SIDE_MENU', () => {
    const action = {
      type: OPEN_SIDE_MENU
    }
    expect(reducer(undefined, action).equals(open))
      .toBeTruthy();
  });

  it('should handle CLOSE_SIDE_MENU', () => {
    const action = {
      type: CLOSE_SIDE_MENU
    }
    expect(reducer(undefined, action).equals(close))
      .toBeTruthy();
  });

  it('should handle TOGGLE_SIDE_MENU', () => {
    const action = {
      type: TOGGLE_SIDE_MENU
    }
    expect(reducer(open, action).equals(close))
      .toBeTruthy();
  });

})