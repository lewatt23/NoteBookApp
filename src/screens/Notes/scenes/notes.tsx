import React, {Fragment, FunctionComponent, useEffect, useState} from 'react';

import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../../utils/colors';
import {StackNavigationProp} from '@react-navigation/stack';
import {NotesStackParamList, NotesStackRouteList} from '../constant';
import {RouteProp} from '@react-navigation/native';
import {NoteCard} from '../../../components/noteCard';
import {INote} from '../../NoteBook/types';
import {SelectAllNote} from '../../NoteBook/reducer';
import {useSelector} from 'react-redux';
import {useGlobalize} from 'react-native-globalize';

const NotesScreen: FunctionComponent<NotesScreenProps> = ({}) => {
  const [data, setData] = useState<INote[]>();
  const {formatMessage} = useGlobalize();
  const note = useSelector(SelectAllNote);

  useEffect(() => {
    if (note) {
      const result = note.sort((a: INote, b: INote) => {
        return (
          new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
        );
      });

      setData(result);
    }
  }, [note]);

  const renderItem: ListRenderItem<INote> = ({item}) => {
    return (
      <NoteCard title={item.title} content={item.description} tag={item.tag} />
    );
  };

  const renderEmpty = () => {
    return (
      <View>
        <Text style={styles.text}>{formatMessage('NoteBook/note_no')}</Text>
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <Fragment>
        <Text style={styles.title}>
          {formatMessage('NoteBook/note_created')}
        </Text>

        <TouchableOpacity style={styles.header}>
          <Text style={styles.titleHeader}>{note ? note.length : 0}</Text>
          <View style={styles.innertext}>
            <Text style={styles.notesTitle}>
              {' '}
              {formatMessage('NoteBook/note_created_so')}
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.recent}>
          <Text style={styles.recentTitle}>
            {' '}
            {formatMessage('NoteBook/note_updated')}
          </Text>
        </View>
      </Fragment>
    );
  };

  return (
    <View style={styles.container_one}>
      <FlatList
        keyExtractor={it => it.id.toString()}
        data={data || []}
        numColumns={1}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
        ListHeaderComponent={renderHeader}
      />
    </View>
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
    marginTop: 5,
  },
  recent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  recentTitle: {
    fontSize: 21,
    fontFamily: 'Raleway-SemiBold',
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Raleway-Regular',
    marginTop: 20,
    textAlign: 'center',
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
