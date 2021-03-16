import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {NoteBookStackRouteList, NoteBookStackParamList} from '../constant';
import NoteBookScreen from '../scenes/noteBook';

const StackNavigator = createStackNavigator<NoteBookStackParamList>();

export const NoteBookStack = () => {
  return (
    <StackNavigator.Navigator
      initialRouteName={NoteBookStackRouteList.NoteBook}>
      <StackNavigator.Screen
        name={NoteBookStackRouteList.NoteBook}
        component={NoteBookScreen}
        options={{
          headerShown: false,
        }}
      />
    </StackNavigator.Navigator>
  );
};
