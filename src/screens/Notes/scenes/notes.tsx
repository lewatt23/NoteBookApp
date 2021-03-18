import React, {FunctionComponent} from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../../utils/colors';
import {StackNavigationProp} from '@react-navigation/stack';
import {NotesStackParamList, NotesStackRouteList} from '../constant';
import {RouteProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {NoteCard} from '../../../components/noteCard';

const NotesScreen: FunctionComponent<NotesScreenProps> = ({navigation}) => {
  console.log(NotesStackRouteList);
  return (
    <ScrollView style={styles.container_one}>
      <Text style={styles.title}>Notes created</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('NoteBookDetails');
        }}
        style={styles.header}>
        <Text style={styles.titleHeader}>100</Text>
        <View style={styles.innertext}>
          <Text style={styles.notesTitle}>Notes created so far</Text>
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
        <Text style={styles.recentTitle}>Recently Updated</Text>
      </View>

      <NoteCard
        title={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
        }
        content={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
        }
      />
      <NoteCard
        title={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
        }
        content={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
        }
      />

      <NoteCard
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

interface NotesScreenProps {
  route: RouteProp<NotesStackParamList, typeof NotesStackRouteList.Notes>;
  navigation: StackNavigationProp<
    NotesStackParamList,
    typeof NotesStackRouteList.Notes
  >;
}
export default NotesScreen;
