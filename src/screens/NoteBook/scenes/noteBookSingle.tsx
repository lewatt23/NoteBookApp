import React, {Fragment, FunctionComponent, useEffect, useState} from 'react';

import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import colors from '../../../utils/colors';
import {StackNavigationProp} from '@react-navigation/stack';
import {NoteBookStackParamList, NoteBookStackRouteList} from '../constant';
import {RouteProp} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NoteCard} from '../../../components/noteCard';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  noteBookDeleteAction,
  noteDeleteAction,
  noteGetAllAction,
} from '../actions';
import {useSelector, useDispatch} from 'react-redux';
import {renderImage} from '../../../components/noteBookCard';
import {SelectAllPNote} from '../reducer';
import {INote} from '../types';
import {useGlobalize} from 'react-native-globalize';

const NoteBookSingleScreen: FunctionComponent<NoteBookSingleScreenProps> = ({
  navigation,
  route,
}) => {
  const dispatch = useDispatch();
  const note = useSelector(SelectAllPNote);
  const [data, setData] = useState<INote[]>([]);
  const [sort, setSort] = useState<'ASC' | 'DESC'>('ASC');
  const {formatMessage} = useGlobalize();

  const {item: items} = route.params;

  useEffect(() => {
    dispatch(noteGetAllAction(items.id));
  }, [dispatch, items, navigation]);

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

  const callSort = () => {
    if (sort === 'ASC') {
      const result = note.sort((a: INote, b: INote) => {
        return (
          new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
        );
      });

      setData(result);
    } else {
      const result = note.sort((a: INote, b: INote) => {
        return (
          new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
        );
      });

      setData(result.reverse());
    }
  };

  const renderEmpty = () => {
    return (
      <View>
        <Text style={styles.text}>
          {formatMessage('NoteBook/noteBook_title')}
        </Text>
      </View>
    );
  };
  const renderHeader = () => {
    return (
      <Fragment>
        <View style={styles.flexHeader}>
          <Text style={styles.title}>{items.title}</Text>
          <View style={styles.flexHeader}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(NoteBookStackRouteList.NoteBookAdd, {
                  item: items,
                  type: 'edit',
                });
              }}>
              <Icon name={'pencil-outline'} color={colors.category} size={21} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                dispatch(noteBookDeleteAction(items.id));
                navigation.goBack();
              }}
              style={styles.trash}>
              <Icon name={'trash-outline'} color={colors.error} size={21} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.header}>
          <View style={styles.marginIcon}>{renderImage(items.tag)}</View>
          <View style={styles.innertext}>
            <Text style={styles.notesTitle}>{items.description}</Text>
          </View>
        </View>

        <View style={styles.recent}>
          <Text style={styles.recentTitle}>
            {formatMessage('NoteBook/note_under')} {items.title}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(NoteBookStackRouteList.NoteAdd, {});
            }}
            style={styles.recentTitle}>
            <Icon name={'add-circle'} color={colors.category} size={31} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            setSort(sort === 'ASC' ? 'DESC' : 'ASC');
            callSort();
          }}
          style={[styles.sort]}>
          <View>
            <Text style={styles.recentText}>
              {sort === 'ASC'
                ? formatMessage('NoteBook/sort_asc')
                : formatMessage('NoteBook/sort_dec')}
            </Text>
          </View>

          <View>
            {sort === 'ASC' ? (
              <Icon name={'caret-up-circle'} color={colors.white} size={25} />
            ) : (
              <Icon name={'caret-down-circle'} color={colors.white} size={25} />
            )}
          </View>
        </TouchableOpacity>
      </Fragment>
    );
  };

  const renderItem: ListRenderItem<INote> = ({item}) => {
    return (
      <NoteCard
        onPress={() =>
          navigation.navigate(NoteBookStackRouteList.NoteAdd, {
            item: item,
            type: 'edit',
          })
        }
        title={item.title}
        content={item.description}
        tag={item.tag}
        onDelete={() => {
          dispatch(noteDeleteAction(item.id));
          navigation.navigate(NoteBookStackRouteList.NoteBook);
        }}
        onEdit={() => {
          navigation.navigate(NoteBookStackRouteList.NoteAdd, {
            item: item,
            type: 'edit',
          });
        }}
      />
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
    flexShrink: 1,
    paddingHorizontal: 10,
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
  recentText: {
    fontSize: 16,
    fontFamily: 'Raleway-Regular',
    color: colors.white,
  },
  flexHeader: {flexDirection: 'row', justifyContent: 'space-between'},
  trash: {
    marginLeft: 20,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Raleway-Regular',
    marginTop: 20,
    textAlign: 'center',
  },
  sort: {
    justifyContent: 'space-between',
    borderRadius: 15,
    borderColor: colors.category,
    backgroundColor: colors.category,
    borderWidth: 2,
    flexDirection: 'row',
    padding: 5,
    marginHorizontal: 80,
    paddingHorizontal: 20,
    marginTop: 20,
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
