import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {RootStackRouteList, RootStackParamList} from './constant.navigation';

import {HomeBottomTab} from './homeBottomTab';
import {NavigationContainer} from '@react-navigation/native';

const StackNavigator = createStackNavigator<RootStackParamList>();

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
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
