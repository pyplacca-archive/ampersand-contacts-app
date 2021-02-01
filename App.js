import React from 'react';
import { useFonts } from '@use-expo/font';
import AppLoading from 'expo-app-loading';
import AppNavigator from './src/AppNavigator';
// import AppProvider from './src/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';

import { LogBox } from 'react-native';


export default function App () {
  // ignore timer warnings raised due firebase's MAX_RETRY issue
  LogBox.ignoreLogs(['Setting a timer']);

  const [loaded] = useFonts({
    // WorkSans: require('./assets/fonts/Work-Sans.ttf'),
  })

  return !loaded ? (
    <AppLoading/>
  ) : (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigator/>
      </PersistGate>
    </Provider>
  )
}
