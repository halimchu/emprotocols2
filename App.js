/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

// org.reactjs.native.example.EM-Protocols
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './routes/drawerStack'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './src/components/ACLS/CardiacArrest/TimerDashboard/redux/index'

const store = createStore(reducers, applyMiddleware(thunk, logger))

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>

  )
}

export default App
