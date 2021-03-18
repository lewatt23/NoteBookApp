import React, {FunctionComponent} from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../../utils/colors';
import {StackNavigationProp} from '@react-navigation/stack';
import {NoteBookStackParamList, NoteBookStackRouteList} from '../constant';
import {RouteProp} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {NoteBookCard} from '../../../components/noteBookCard';

const NoteBookScreen: FunctionComponent<NoteBookScreenProps> = ({
  navigation,
}) => {
  return (
    <ScrollView style={styles.container_one}>
      <Text style={styles.title}>Note Books</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate(NoteBookStackRouteList.NoteBookDetails);
        }}
        style={styles.header}>
        <Text style={styles.titleHeader}>8</Text>
        <View style={styles.innertext}>
          <Text style={styles.notesTitle}>Notes Book created so far</Text>
          <View style={styles.marginIcon}>
            <Icon
              name={'chevron-forward-circle-outline'}
              color={colors.white}
              size={28}
            />
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.recent}>
        <Text style={styles.recentTitle}>Recently Created</Text>
      </View>

      <NoteBookCard
        onPress={() =>
          navigation.navigate(NoteBookStackRouteList.NoteBookSingle)
        }
        title={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
        }
        content={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
        }
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container_one: {
    padding: 10,
    paddingHorizontal: 10,
    marginTop: 20,
    backgroundColor: colors.backgroundColor,
  },
  title: {
    fontSize: 21,
    fontFamily: 'Raleway-Bold',
  },
  header: {
    backgroundColor: colors.black,
    borderColor: colors.black,
    borderRadius: 8,
    borderWidth: 2,

    marginTop: 20,
    padding: 20,
  },
  titleHeader: {
    fontSize: 32,
    color: colors.white,
    fontFamily: 'Raleway-Bold',
  },
  innertext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
  notesTitle: {
    fontSize: 16,
    color: colors.white,
    fontFamily: 'Raleway-Regular',
    marginTop: 5,
  },
  marginIcon: {
    marginTop: 5,
  },
  recent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  recentTitle: {
    fontSize: 21,
    fontFamily: 'Raleway-Bold',
    marginTop: 20,
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
