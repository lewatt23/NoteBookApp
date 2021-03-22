import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {RootStackRouteList, RootStackParamList} from './constant.navigation';

import {HomeBottomTab} from './homeBottomTab';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import colors from '../utils/colors';

const StackNavigator = createStackNavigator<RootStackParamList>();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.backgroundColor,
  },
};
const AppNavigationContainer = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <StackNavigator.Navigator
        initialRouteName={RootStackRouteList.HomeBottomTab}>
        <StackNavigator.Screen
          name={RootStackRouteList.HomeBottomTab}
          component={HomeBottomTab}
          options={{
            headerShown: false,
            headerStyle: {shadowOpacity: 0, elevation: 0},
          }}
        />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
