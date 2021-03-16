import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';
import AppNavigationContainer from './src/navigation/index.navigation';

import {enableScreens} from 'react-native-screens';
import {GlobalizeProvider} from 'react-native-globalize';
import './src/config/i18n';
import colors from './src/utils/colors';
import {localeValue} from './src/config/i18n';

import {SafeAreaProvider} from 'react-native-safe-area-context';
enableScreens();
const AppT = () => {
  return (
    <SafeAreaProvider>
      <GlobalizeProvider locale={localeValue()} currency="XOF">
        <Fragment>
          <StatusBar barStyle="light-content" backgroundColor={colors.black} />

          <AppNavigationContainer />
        </Fragment>
      </GlobalizeProvider>
    </SafeAreaProvider>
  );
};

const App = () => {
  return <AppT />;
};

export default App;
