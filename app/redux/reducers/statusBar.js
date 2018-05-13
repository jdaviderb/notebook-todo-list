import { fromJS } from 'immutable';

const initialState = fromJS({
  visible: false
});

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}