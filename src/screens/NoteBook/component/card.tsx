import React, {FunctionComponent} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, StyleSheet, Text, Image} from 'react-native';
import colors from '../../../utils/colors';

const Card: FunctionComponent<CardProps> = ({
  number,
  tag = TagEnum.work,
  onPress,
}) => {
  const renderImage = () => {
    switch (tag) {
      case TagEnum.work:
        return (
          <Image
            style={styles.image}
            source={require('../../../assets/work.png')}
          />
        );

      case TagEnum.sport:
        return (
          <Image
            style={styles.image}
            source={require('../../../assets/sport.png')}
          />
        );

      case TagEnum.code:
        return (
          <Image
            style={styles.image}
            source={require('../../../assets/code.png')}
          />
        );

      case TagEnum.book:
        return (
          <Image
            style={styles.image}
            source={require('../../../assets/book.png')}
          />
        );
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>{renderImage()}</View>
      <View>
        <Text style={styles.title}>{number}</Text>
      </View>
      <View>
        <Text style={styles.content}>{tag}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: 5,
    justifyContent: 'center',
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.white,
    paddingHorizontal: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  image: {
    height: 30,
    width: 30,
  },
  title: {
    fontSize: 18,
    color: colors.black,
    fontFamily: 'Raleway-SemiBold',
  },
  content: {
    fontSize: 14,
    color: colors.grayLight,
  },
});

interface CardProps {
  number: number;
  tag?: TagEnum;
  onPress?: () => void;
}

export enum TagEnum {
  sport = 'sport',
  work = 'work',
  code = 'code',
  book = 'book',
}

export {Card};
