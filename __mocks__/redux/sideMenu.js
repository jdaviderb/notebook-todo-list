import { fromJS } from 'immutable';

export const defaultState = fromJS({
  open: false
});

export const open = fromJS({
  open: true
});

export const close = fromJS({
  open: false
});