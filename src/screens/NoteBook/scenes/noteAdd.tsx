import React, {FunctionComponent, useEffect, useState} from 'react';

import {StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import colors from '../../../utils/colors';
import {StackNavigationProp} from '@react-navigation/stack';
import {NoteBookStackParamList, NoteBookStackRouteList} from '../constant';
import {RouteProp} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../../components/Button';
import Input, {InputArea} from '../../../components/Input';
import {TagEnum} from '../component/card';

const NoteAddScreen: FunctionComponent<NoteAddScreenProps> = ({navigation}) => {
  const [selectedTag, setselectedTag] = useState<string | number>(TagEnum.book);
  useEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        fontFamily: 'Raleway-Regular',
        fontSize: 16,
      },

      headerRight: () => (
        <View style={styles.marginButton}>
          <Button onPress={() => {}}>Save note</Button>
        </View>
      ),
    });
  }, [navigation]);
  return (
    <ScrollView style={styles.container_one}>
      <View style={styles.marginIcon}>
        <Input placeholder="Enter the title" />
      </View>
      <View style={[styles.marginIcon, styles.searchSection_two]}>
        <Picker
          selectedValue={selectedTag}
          mode={'dropdown'}
          onValueChange={itemValue => {
            setselectedTag(itemValue);
          }}>
          {Object.keys(TagEnum).map(key => (
            <Picker.Item label={key} value={key} />
          ))}
        </Picker>
      </View>
      <View style={[styles.marginIcon, styles.searchSection_two]}>
        <Picker
          selectedValue={selectedTag}
          mode={'dropdown'}
          onValueChange={itemValue => {
            setselectedTag(itemValue);
          }}>
          <Picker.Item label={'Change notebook'} value={''} />
          {Object.keys(TagEnum).map(key => (
            <Picker.Item label={key} value={key} />
          ))}
        </Picker>
      </View>
      <View style={styles.marginIcon}>
        <InputArea placeholder="Enter details" />
      </View>
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
  marginButton: {
    marginHorizontal: 10,
  },
  searchSection_two: {
    borderColor: '#dbdbdb',
    color: '#232323',
    borderBottomWidth: 1,
    backgroundColor: colors.white,
    fontFamily: 'Raleway-Regular',
  },
});

interface NoteAddScreenProps {
  route: RouteProp<
    NoteBookStackParamList,
    typeof NoteBookStackRouteList.NoteBookAdd
  >;
  navigation: StackNavigationProp<
    NoteBookStackParamList,
    typeof NoteBookStackRouteList.NoteBookAdd
  >;
}
export default NoteAddScreen;
