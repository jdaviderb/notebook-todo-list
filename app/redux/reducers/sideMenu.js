import { fromJS } from 'immutable';
import {
  TOGGLE_SIDE_MENU,
  OPEN_SIDE_MENU,
  CLOSE_SIDE_MENU
} from '../actions/types';

const initialState = fromJS({
  open: false
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_MENU:
      return state.set('open', !state.get('open'));
    case OPEN_SIDE_MENU:
      return state.merge({ open: true });
    case CLOSE_SIDE_MENU:
      return state.merge({ open: false });
    default:
      return state
  }
}