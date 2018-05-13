import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar
} from 'react-native';
import {
  addNavigationHelpers,
  NavigationActions
} from 'react-navigation';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import Router from '../../router';
import SideMenu from 'react-native-side-menu';
import SideMenuContent from './sideMenuContent';
import {
  open,
  close
} from '../../redux/actions/sideMenu'
const middleware = createReactNavigationReduxMiddleware(
  'root',
  ({ navigator }) => navigator,
);
const addListener = createReduxBoundAddListener('root');
class RouterRedux extends Component {

  syncSideMenuWidthRedux (sideMenuOpen) {
    if (sideMenuOpen) {
      this.props.open();
    } else {
      this.props.close();
    }
  }

  render () {
    const { dispatch, navigator } = this.props;
    const nav = addNavigationHelpers({
      state: navigator,
      dispatch,
      addListener
    })
    return (
      <SideMenu
        isOpen={this.props.sideMenu.open}
        menu={<SideMenuContent />}
        onChange={this.syncSideMenuWidthRedux.bind(this)}
        disableGestures={false}
        >
        <View style={{flex: 1}}>
          <StatusBar hidden={!this.props.statusBar.visible}/>
          <Router navigation={nav} />
        </View>
      </SideMenu>
    )
  }
}
const mapStateToProps = ({ navigator, statusBar, sideMenu }) => ({
  navigator,
  statusBar: statusBar.toJS(),
  sideMenu: sideMenu.toJS()
});

const mapDispatchToProps = (dispatch) => ({
  open: () => dispatch(open()),
  close: () => dispatch(close()),
  dispatch: dispatch
});
export default connect(mapStateToProps, mapDispatchToProps)(RouterRedux)
