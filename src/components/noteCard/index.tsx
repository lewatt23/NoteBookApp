import React, {FunctionComponent} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, StyleSheet, Text, Image} from 'react-native';
import colors from '../../utils/colors';
import {Truncate} from '../../utils';
import Icon from 'react-native-vector-icons/Ionicons';

const NoteCard: FunctionComponent<NoteCardProps> = ({
  title,
  content,
  tag = 'work',
  onPress,
}) => {
  const renderImage = () => {
    switch (tag) {
      case TagEnum.work:
        return (
          <Image
            style={styles.image}
            source={require('../../assets/work.png')}
          />
        );

      case TagEnum.sport:
        return (
          <Image
            style={styles.image}
            source={require('../../assets/sport.png')}
          />
        );

      case TagEnum.code:
        return (
          <Image
            style={styles.image}
            source={require('../../assets/code.png')}
          />
        );

      case TagEnum.book:
        return (
          <Image
            style={styles.image}
            source={require('../../assets/book.png')}
          />
        );
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <Text style={styles.title}>{Truncate(title, 20)}</Text>
        <Text numberOfLines={1} style={styles.content}>
          {Truncate(content, 40)}
        </Text>
      </View>
      <View style={styles.flexHeader}>
        <View>{renderImage()}</View>
        <View style={[styles.flexHeader, styles.marginTop]}>
          <TouchableOpacity>
            <Icon name={'pencil-outline'} color={colors.category} size={21} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.trash}>
            <Icon name={'trash-outline'} color={colors.error} size={21} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'space-evenly',
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.white,
    paddingHorizontal: 10,
    elevation: 2,
    marginHorizontal: 10,
  },
  image: {
    marginTop: 10,
    height: 30,
    width: 30,
  },
  title: {
    fontSize: 18,
    color: colors.black,
    fontFamily: 'Raleway-Bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 14,
    color: colors.grayLight,
  },
  trash: {
    marginLeft: 10,
  },
  flexHeader: {flexDirection: 'row', justifyContent: 'space-between'},
  marginTop: {
    marginTop: 10,
  },
});

interface NoteCardProps {
  title: string;
  content: string;
  tag?: TagEnum;
  onPress?: () => void;
}

enum TagEnum {
  sport = 'sport',
  work = 'work',
  code = 'code',
  book = 'book',
}

export {NoteCard};
