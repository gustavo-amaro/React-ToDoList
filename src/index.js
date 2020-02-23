/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StatusBar,
} from 'react-native';


import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

import Main from './Main';

const store = createStore(reducers);

export default function App(){


  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Main />
    </Provider>
  );
};
