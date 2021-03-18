import React, {FunctionComponent} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, StyleSheet, Text, Image} from 'react-native';
import colors from '../../utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {Truncate} from '../../utils';

const NoteBookCard: FunctionComponent<NoteBookCardProps> = ({
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
      <View>{renderImage()}</View>
      <View>
        <Text style={styles.title}>{Truncate(title, 20)}</Text>
        <Text numberOfLines={1} style={styles.content}>
          {Truncate(content, 15)}
        </Text>
      </View>
      <View>
        <Icon
          name={'chevron-forward-circle-outline'}
          color={colors.black}
          size={28}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-evenly',
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.white,
    paddingHorizontal: 1,
    elevation: 2,
  },
  image: {
    height: 40,
    width: 40,
  },
  title: {
    fontSize: 16,
    color: colors.black,
    fontFamily: 'Raleway-SemiBold',
  },
  content: {
    fontSize: 14,
    color: colors.grayLight,
  },
});

interface NoteBookCardProps {
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

export {NoteBookCard};
