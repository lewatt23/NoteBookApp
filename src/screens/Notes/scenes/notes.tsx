import React, {FunctionComponent} from 'react';

import {StyleSheet, View} from 'react-native';
import colors from '../../../utils/colors';
import {StackNavigationProp} from '@react-navigation/stack';
import {NotesStackParamList, NotesStackRouteList} from '../constant';
import {RouteProp} from '@react-navigation/native';

const NotesScreen: FunctionComponent<NotesScreenProps> = ({}) => {
  return <View style={styles.container_one} />;
};

const styles = StyleSheet.create({
  container_one: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 0,
    justifyContent: 'center',
  },
});

interface NotesScreenProps {
  route: RouteProp<NotesStackParamList, typeof NotesStackRouteList.Notes>;
  navigation: StackNavigationProp<
    NotesStackParamList,
    typeof NotesStackRouteList.Notes
  >;
}
export default NotesScreen;
