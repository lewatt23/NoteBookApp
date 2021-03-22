import React, {Fragment, FunctionComponent, useEffect, useState} from 'react';

import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import colors from '../../../utils/colors';
import {StackNavigationProp} from '@react-navigation/stack';
import {NoteBookStackParamList, NoteBookStackRouteList} from '../constant';
import {RouteProp} from '@react-navigation/native';
import {NoteBookCard} from '../../../components/noteBookCard';
import {Card, TagEnum} from '../component/card';
import {SelectAllNoteBooks} from '../reducer';
import {useSelector} from 'react-redux';
import {INoteBook} from '../types';
import {useGlobalize} from 'react-native-globalize';

interface ICount {
  books: number;
  work: number;
  sport: number;
  code: number;
}

const NoteBookDetailsScreen: FunctionComponent<NoteBookDetailsScreenProps> = ({
  navigation,
}) => {
  const {formatMessage} = useGlobalize();

  const notebooks = useSelector(SelectAllNoteBooks);
  const [data, setData] = useState<INoteBook[]>([]);
  const [selected, setSelected] = useState<TagEnum | string>('');
  const [count, setCount] = useState<ICount>({
    books: 0,
    work: 0,
    sport: 0,
    code: 0,
  });

  useEffect(() => {
    if (notebooks) {
      setData(notebooks);
      let subCount: ICount = {
        books: 0,
        work: 0,
        sport: 0,
        code: 0,
      };
      notebooks.forEach(item => {
        if (item.tag === TagEnum.book) {
          subCount.books++;
        }
        if (item.tag === TagEnum.sport) {
          subCount.sport++;
        }
        if (item.tag === TagEnum.work) {
          subCount.work++;
        }
        if (item.tag === TagEnum.code) {
          subCount.code++;
        }
      });
      setCount(subCount);
    }
  }, [notebooks]);

  useEffect(() => {
    if (notebooks && selected !== '') {
      let sortData = notebooks.filter(item => item.tag === selected);

      setData(sortData);
    }
  }, [selected, notebooks]);

  const renderItem: ListRenderItem<INoteBook> = ({item}) => {
    return (
      <NoteBookCard
        onPress={() =>
          navigation.navigate(NoteBookStackRouteList.NoteBookSingle, {
            item: item,
          })
        }
        title={item.title}
        content={item.description}
        tag={item.tag}
      />
    );
  };

  const renderHeader = () => {
    return (
      <Fragment>
        <View style={styles.container_box}>
          <Card
            onPress={() => {
              setSelected(TagEnum.book);
            }}
            number={count.books}
            tag={TagEnum.book}
          />
          <Card
            onPress={() => {
              setSelected(TagEnum.work);
            }}
            number={count.work}
            tag={TagEnum.work}
          />
          <Card
            onPress={() => {
              setSelected(TagEnum.sport);
            }}
            number={count.sport}
            tag={TagEnum.sport}
          />
          <Card
            onPress={() => {
              setSelected(TagEnum.code);
            }}
            number={count.code}
            tag={TagEnum.code}
          />
        </View>

        <View style={styles.recent}>
          <Text style={styles.recentTitle}>
            {formatMessage('NoteBook/notebooks_created')}
          </Text>
        </View>
      </Fragment>
    );
  };

  const renderEmpty = () => {
    return (
      <View>
        <Text style={styles.text}>
          {' '}
          {formatMessage('NoteBook/noteBook_title')}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container_one}>
      <FlatList
        keyExtractor={it => it.id.toString()}
        data={data}
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

interface NoteBookDetailsScreenProps {
  route: RouteProp<
    NoteBookStackParamList,
    typeof NoteBookStackRouteList.NoteBookDetails
  >;
  navigation: StackNavigationProp<
    NoteBookStackParamList,
    typeof NoteBookStackRouteList.NoteBookDetails
  >;
}
export default NoteBookDetailsScreen;
