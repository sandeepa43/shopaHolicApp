import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';
import Route from './src/routes';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    );
  }
}
