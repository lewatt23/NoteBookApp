import React, {FunctionComponent} from 'react';

import {StyleSheet, View} from 'react-native';
import colors from '../../../utils/colors';
import {StackNavigationProp} from '@react-navigation/stack';
import {NoteBookStackParamList, NoteBookStackRouteList} from '../constant';
import {RouteProp} from '@react-navigation/native';

const NoteBookScreen: FunctionComponent<NoteBookScreenProps> = ({}) => {
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

interface NoteBookScreenProps {
  route: RouteProp<
    NoteBookStackParamList,
    typeof NoteBookStackRouteList.NoteBook
  >;
  navigation: StackNavigationProp<
    NoteBookStackParamList,
    typeof NoteBookStackRouteList.NoteBook
  >;
}
export default NoteBookScreen;
