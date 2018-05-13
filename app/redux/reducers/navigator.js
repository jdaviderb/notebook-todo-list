import Router from '../../router';
import { NavigationActions } from 'react-navigation'

const initialAction = { type: NavigationActions.Init }

const rootComponent = 'Home';
const defaultStateForAction = Router.router.getActionForPathAndParams(rootComponent)
const initialState = Router.router.getStateForAction(initialAction);

export default (state = initialState, action) => {
  const nextState = Router.router.getStateForAction(action, state);
  return nextState || state;
}