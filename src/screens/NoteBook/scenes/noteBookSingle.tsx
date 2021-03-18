import React, {FunctionComponent} from 'react';

import {Image, StyleSheet, Text, View} from 'react-native';
import colors from '../../../utils/colors';
import {StackNavigationProp} from '@react-navigation/stack';
import {NoteBookStackParamList, NoteBookStackRouteList} from '../constant';
import {RouteProp} from '@react-navigation/native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {NoteCard} from '../../../components/noteCard';
import Icon from 'react-native-vector-icons/Ionicons';

const NoteBookSingleScreen: FunctionComponent<NoteBookSingleScreenProps> = ({
  navigation,
}) => {
  return (
    <ScrollView style={styles.container_one}>
      <View style={styles.flexHeader}>
        <Text style={styles.title}>Note Books</Text>
        <View style={styles.flexHeader}>
          <TouchableOpacity>
            <Icon name={'pencil-outline'} color={colors.category} size={21} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.trash}>
            <Icon name={'trash-outline'} color={colors.error} size={21} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.header}>
        <View style={styles.marginIcon}>
          <Image
            style={styles.image}
            source={require('../../../assets/sport.png')}
          />
        </View>
        <View style={styles.innertext}>
          <Text style={styles.notesTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </Text>
        </View>
      </View>

      <View style={styles.recent}>
        <Text style={styles.recentTitle}>Notes under card</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(NoteBookStackRouteList.NoteAdd);
          }}
          style={styles.recentTitle}>
          <Icon name={'add-circle'} color={colors.category} size={31} />
        </TouchableOpacity>
      </View>

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
  container_box: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
    marginTop: 10,
  },
  recent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  image: {
    height: 30,
    width: 30,
  },
  recentTitle: {
    fontSize: 21,
    fontFamily: 'Raleway-Bold',
    marginTop: 20,
  },
  flexHeader: {flexDirection: 'row', justifyContent: 'space-between'},
  trash: {
    marginLeft: 20,
  },
});

interface NoteBookSingleScreenProps {
  route: RouteProp<
    NoteBookStackParamList,
    typeof NoteBookStackRouteList.NoteBookSingle
  >;
  navigation: StackNavigationProp<
    NoteBookStackParamList,
    typeof NoteBookStackRouteList.NoteBookSingle
  >;
}
export default NoteBookSingleScreen;
