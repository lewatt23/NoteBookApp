// import {useGlobalize} from 'react-native-globalize';
import colors from '../utils/colors';

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  HomeBottomTabParamList,
  HomeBottomTabRouteList,
} from './constant.navigation';
import {NotesStack} from '../screens/Notes';
import {NoteBookStack} from '../screens/NoteBook';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from '@react-navigation/native';
import {NoteBookStackRouteList} from '../screens/NoteBook/constant';

const IconNameStackMap: {[index in keyof HomeBottomTabParamList]: string} = {
  [HomeBottomTabRouteList.NotesStack]: 'file-tray-full',
  [HomeBottomTabRouteList.CreatScreen]: 'add-circle',
  [HomeBottomTabRouteList.NoteBookStack]: 'journal',
};

const TabBottomNavigator = createBottomTabNavigator<HomeBottomTabParamList>();
const setTabBarVisible = (route: any) => {
  const routeName = String(getFocusedRouteNameFromRoute(route));
  const hideOnScreens = ['NoteBookStack', 'NotesStack'];
  if (hideOnScreens.indexOf(routeName) > -1) {
    return false;
  }
  return true;
};

export const HomeBottomTab = () => {
  const navigations = useNavigation();
  return (
    <TabBottomNavigator.Navigator
      tabBarOptions={{
        activeTintColor: colors.black,
        inactiveTintColor: colors.grayLight,
        labelStyle: {
          fontFamily: 'Raleway-SemiBold',
        },
        showLabel: false,
        style: {
          backgroundColor: colors.white,
          paddingTop: 5,
          paddingBottom: 4,
          borderWidth: 1,
          borderColor: colors.white,
          borderTopStartRadius: 35,
          borderTopEndRadius: 35,
          elevation: 5,
          height: 70,
        },
      }}
      screenOptions={({route}) => ({
        tabBarLabel: '',
        tabBarIcon: ({focused, color}) => {
          let icon =
            IconNameStackMap[route.name as keyof HomeBottomTabParamList];
          if (route.name === HomeBottomTabRouteList.CreatScreen) {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigations.navigate(NoteBookStackRouteList.NoteBookAdd, {
                    item: {},
                  });
                }}>
                <Image
                  style={styles.image}
                  source={require('../assets/add.png')}
                />
              </TouchableOpacity>
            );
          }
          return (
            <Icon
              name={focused ? icon : icon + '-outline'}
              color={color}
              size={24}
            />
          );
        },
      })}>
      <TabBottomNavigator.Screen
        name={HomeBottomTabRouteList.NoteBookStack}
        options={(navigation: any) => ({
          tabBarVisible: setTabBarVisible(navigation.route),
        })}
        component={NoteBookStack}
      />
      <TabBottomNavigator.Screen
        name={HomeBottomTabRouteList.CreatScreen}
        options={(navigation: any) => ({
          tabBarVisible: setTabBarVisible(navigation.route),
        })}
        component={NoteBookStack}
      />
      <TabBottomNavigator.Screen
        name={HomeBottomTabRouteList.NotesStack}
        options={(navigation: any) => ({
          tabBarVisible: setTabBarVisible(navigation.route),
        })}
        component={NotesStack}
      />
    </TabBottomNavigator.Navigator>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
  },
});
