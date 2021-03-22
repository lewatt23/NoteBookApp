import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {NotesStackRouteList, NotesStackParamList} from '../constant';
import NotesScreen from '../scenes/notes';

const StackNavigator = createStackNavigator<NotesStackParamList>();

export const NotesStack = () => {
  return (
    <StackNavigator.Navigator initialRouteName={NotesStackRouteList.Notes}>
      <StackNavigator.Screen
        name={NotesStackRouteList.Notes}
        component={NotesScreen}
        options={{
          headerShown: false,
        }}
      />
    </StackNavigator.Navigator>
  );
};
