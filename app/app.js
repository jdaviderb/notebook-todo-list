import React, { Component } from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import Router from './containers/navigation/router';
import { Text } from 'react-native';
export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}