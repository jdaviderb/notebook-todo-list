import { NavigationActions } from 'react-navigation';
import { close } from './sideMenu';

export const back = () =>
  (dispatch) => dispatch(NavigationActions.back())

export const goTo = (routeName) =>
  (dispatch) => dispatch(close()) &&
    dispatch(NavigationActions.navigate({ routeName }));
