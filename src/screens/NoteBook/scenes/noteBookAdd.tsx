import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react';

import {Alert, StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import colors from '../../../utils/colors';
import {StackNavigationProp} from '@react-navigation/stack';
import {NoteBookStackParamList, NoteBookStackRouteList} from '../constant';
import {RouteProp} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../../components/Button';
import Input, {InputArea} from '../../../components/Input';
import {TagEnum} from '../component/card';
import {useDispatch, useSelector} from 'react-redux';
import {noteBookAddAction, noteBookEditAction} from '../actions';
import {INoteBook} from '../types';
import {SelectAllNoteBooks} from '../reducer';

const NoteBookAddScreen: FunctionComponent<NoteBookAddScreenProps> = ({
  navigation,
  route,
}) => {
  const [selectedTag, setselectedTag] = useState<string | number>(TagEnum.book);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const dispatch = useDispatch();
  const notebooks = useSelector(SelectAllNoteBooks);
  const {item, type} = route.params;

  const createNoteBook = useCallback(() => {
    if (title.length > 0 && content.length > 0) {
      if (type === 'edit') {
        const payload: INoteBook = {
          title,
          description: content,
          tag: String(selectedTag),
          id: item ? item.id : 0,
        };
        dispatch(noteBookEditAction(payload));
      } else {
        const payload: INoteBook = {
          title,
          description: content,
          tag: String(selectedTag),
          id: notebooks ? notebooks.length + 1 : 0,
        };
        dispatch(noteBookAddAction(payload));
      }

      navigation.navigate(NoteBookStackRouteList.NoteBookDetails);
    } else {
      Alert.alert('Enter title or content');
    }
  }, [
    title,
    content,
    dispatch,
    selectedTag,
    notebooks,
    navigation,
    type,
    item,
  ]);

  useEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        fontFamily: 'Raleway-Regular',
        fontSize: 16,
      },

      headerRight: () => (
        <View style={styles.marginButton}>
          <Button
            onPress={() => {
              createNoteBook();
            }}>
            {type && type === 'edit' ? 'Update NoteBook' : 'Save NoteBook'}
          </Button>
        </View>
      ),
    });
  }, [navigation, createNoteBook, type]);
  useEffect(() => {
    if (item) {
      setContent(item.description);
      setTitle(item.title);
      setselectedTag(item.tag);
    }
  }, [item]);

  return (
    <ScrollView style={styles.container_one}>
      <View style={styles.marginIcon}>
        <Input
          placeholder="Enter the title"
          value={title}
          onChange={(e: string) => {
            setTitle(e);
          }}
        />
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
      <View style={styles.marginIcon}>
        <InputArea
          placeholder="Enter details"
          value={content}
          onChange={(e: string) => {
            setContent(e);
          }}
        />
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
    fontFamily: 'Raleway-SemiBold',
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
    fontFamily: 'Raleway-SemiBold',
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
    fontFamily: 'Raleway-SemiBold',
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

interface NoteBookAddScreenProps {
  route: RouteProp<
    NoteBookStackParamList,
    typeof NoteBookStackRouteList.NoteBookAdd
  >;
  navigation: StackNavigationProp<
    NoteBookStackParamList,
    typeof NoteBookStackRouteList.NoteBookAdd
  >;
}
export default NoteBookAddScreen;
