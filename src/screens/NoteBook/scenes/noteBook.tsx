import React, {Fragment, FunctionComponent} from 'react';

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
import {NoteBookStackParamList, NoteBookStackRouteList} from '../constant';
import {RouteProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {NoteBookCard} from '../../../components/noteBookCard';
import {SelectAllNoteBooks} from '../reducer';
import {useSelector} from 'react-redux';
import {INoteBook} from '../types';
import {useGlobalize} from 'react-native-globalize';

const NoteBookScreen: FunctionComponent<NoteBookScreenProps> = ({
  navigation,
}) => {
  const {formatMessage} = useGlobalize();
  const notebooks = useSelector(SelectAllNoteBooks);

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
        <Text style={styles.title}>
          {formatMessage('NoteBook/noteBook_subtitle')}
        </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate(NoteBookStackRouteList.NoteBookDetails);
          }}
          style={styles.header}>
          <Text style={styles.titleHeader}>
            {notebooks ? notebooks.length : 0}
          </Text>
          <View style={styles.innertext}>
            <Text style={styles.notesTitle}>
              {formatMessage('NoteBook/noteBook_created')}
            </Text>
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
          <Text style={styles.recentTitle}>
            {formatMessage('NoteBook/noteBook_rCreated')}
          </Text>
        </View>
      </Fragment>
    );
  };

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
  return (
    <View style={styles.container_one}>
      <FlatList
        keyExtractor={it => it.id.toString()}
        data={notebooks}
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
