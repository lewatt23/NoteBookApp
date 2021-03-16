// import {useGlobalize} from 'react-native-globalize';
import colors from '../utils/colors';

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  HomeBottomTabParamList,
  HomeBottomTabRouteList,
} from './constant.navigation';
import {useGlobalize} from 'react-native-globalize';
import {NotesStack} from '../screens/Notes';
import {NoteBookStack} from '../screens/NoteBook';

const IconNameStackMap: {[index in keyof HomeBottomTabParamList]: string} = {
  [HomeBottomTabRouteList.NotesStack]: 'earth',
  [HomeBottomTabRouteList.NoteBookStack]: 'chatbubbles',
};

const TabBottomNavigator = createBottomTabNavigator<HomeBottomTabParamList>();

export const HomeBottomTab = () => {
  const {formatMessage} = useGlobalize();

  return (
    <TabBottomNavigator.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.white,
        labelStyle: {
          fontFamily: 'Raleway-SemiBold',
        },
        style: {
          backgroundColor: colors.black,
          paddingTop: 5,
          paddingBottom: 4,
          borderWidth: 0,

          elevation: 0,
          borderTopWidth: 0,
        },
      }}
      screenOptions={({route}) => ({
        tabBarLabel: formatMessage(`Navigation/${route.name}`),

        tabBarIcon: ({focused, color}) => {
          let icon =
            IconNameStackMap[route.name as keyof HomeBottomTabParamList];

          return (
            <Icon
              name={focused ? icon : icon + '-outline'}
              color={color}
              size={18}
            />
          );
        },
      })}>
      <TabBottomNavigator.Screen
        name={HomeBottomTabRouteList.NoteBookStack}
        component={NoteBookStack}
      />
      <TabBottomNavigator.Screen
        name={HomeBottomTabRouteList.NotesStack}
        component={NotesStack}
      />
    </TabBottomNavigator.Navigator>
  );
};
