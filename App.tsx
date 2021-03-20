import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';
import AppNavigationContainer from './src/navigation/index.navigation';

import {enableScreens} from 'react-native-screens';
import {GlobalizeProvider} from 'react-native-globalize';
import './src/config/i18n';
import colors from './src/utils/colors';
import {localeValue} from './src/config/i18n';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import configureStore from './src/config/redux';

const {store, persistor} = configureStore();
enableScreens();

const AppT = () => {
  return (
    <SafeAreaProvider>
      <GlobalizeProvider locale={localeValue()} currency="XOF">
        <Fragment>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={colors.backgroundColor}
          />

          <AppNavigationContainer />
        </Fragment>
      </GlobalizeProvider>
    </SafeAreaProvider>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppT />
      </PersistGate>
    </Provider>
  );
};

export default App;
