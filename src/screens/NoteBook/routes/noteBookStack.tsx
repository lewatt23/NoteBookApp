import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {NoteBookStackRouteList, NoteBookStackParamList} from '../constant';
import NoteBookScreen from '../scenes/noteBook';
import NoteBookDetailsScreen from '../scenes/noteBookDetails';
import colors from '../../../utils/colors';
import NoteBookSingleScreen from '../scenes/noteBookSingle';
import NoteBookAddScreen from '../scenes/noteBookAdd';
import NoteAddScreen from '../scenes/noteAdd';

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

      <StackNavigator.Screen
        name={NoteBookStackRouteList.NoteBookDetails}
        component={NoteBookDetailsScreen}
        options={{
          cardShadowEnabled: false,
          headerStyle: {
            backgroundColor: colors.backgroundColor,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            borderBottomWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      />

      <StackNavigator.Screen
        name={NoteBookStackRouteList.NoteBookSingle}
        component={NoteBookSingleScreen}
        options={{
          cardShadowEnabled: false,
          headerStyle: {
            backgroundColor: colors.backgroundColor,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            borderBottomWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      />

      <StackNavigator.Screen
        name={NoteBookStackRouteList.NoteBookAdd}
        component={NoteBookAddScreen}
        options={{
          cardShadowEnabled: false,
          headerStyle: {
            backgroundColor: colors.backgroundColor,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            borderBottomWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      />

      <StackNavigator.Screen
        name={NoteBookStackRouteList.NoteAdd}
        component={NoteAddScreen}
        options={{
          cardShadowEnabled: false,
          headerStyle: {
            backgroundColor: colors.backgroundColor,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            borderBottomWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      />
    </StackNavigator.Navigator>
  );
};
