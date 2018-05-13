import {
  OPEN_SIDE_MENU,
  CLOSE_SIDE_MENU,
  TOGGLE_SIDE_MENU
} from './types';

export const open = () => ({
  type: OPEN_SIDE_MENU
});

export const close = () => ({
  type: CLOSE_SIDE_MENU
});

export const toggle = () => ({
  type: TOGGLE_SIDE_MENU
});