import {
  combineReducers
} from 'redux';
import navigator from './navigator';
import statusBar from './statusBar';
import sideMenu from './sideMenu';
import tasks from './tasks';
export default combineReducers({
  navigator,
  statusBar,
  sideMenu,
  tasks
});
