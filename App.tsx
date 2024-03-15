/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NativeBaseProvider, theme} from 'native-base';
import React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import HomeScreen from 'screens/Home';
import store, {persistor} from 'store';

function App(): JSX.Element {
  return (
    <NativeBaseProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HomeScreen />
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  );
}

export default App;
