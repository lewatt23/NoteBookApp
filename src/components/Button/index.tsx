import React, {FunctionComponent} from 'react';
import {TouchableOpacity, Text, StyleSheet, ViewStyle} from 'react-native';
import colors from '../../utils/colors';
/**
 * Styles to use for kawlo Buttons
 */

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 0,
    borderColor: colors.primary,
    paddingHorizontal: 15,
  },

  containerTertiary: {
    backgroundColor: colors.tertiary,
    borderColor: colors.tertiary,
  },
  containerSecondary: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },
  containerwhite: {
    backgroundColor: colors.white,
    borderColor: colors.white,
  },

  containerOutline: {
    backgroundColor: 'transparent',
    borderColor: colors.white,
    borderWidth: 1,
  },
  containerOutlineError: {
    backgroundColor: 'transparent',
    borderColor: colors.error,
    borderWidth: 1,
  },
  containerOutlinePrimary: {
    backgroundColor: 'transparent',
    borderColor: colors.primary,
    borderWidth: 1,
  },
  containerRounded: {
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 0,
    borderColor: colors.primary,
    paddingHorizontal: 70,
  },
  text: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Muli-Bold',
  },
  textCap: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  textwhite: {
    color: colors.black,
    alignSelf: 'center',
    fontSize: 18,

    fontWeight: '500',
  },

  textOutline: {
    color: colors.white,
  },
  textOutlinePrimary: {
    color: colors.primary,
  },
  error: {
    color: colors.error,
  },
  textsmall: {
    fontSize: 14,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
});

interface ButtonProps {
  onPress?(): void;
  type?: string;
  outlinePrimary?: boolean;
  style?: ViewStyle;
  children?: React.ReactElement | string;
}

/**
 * Button used for component
 *
 * @param {Function} onPress - Function to call action
 * @param {children} children - Childdren component can be text
 * @param {boolean} outline - Boolean value to determine if it's an outline button or not
 * @returns {Button} Button with specific params
 *
 */

const Button: FunctionComponent<ButtonProps> = ({
  onPress,
  children,
  type,
  outlinePrimary,
  style,
}) => {
  const containerStyles: any = [styles.container];
  const textStyles: any = [styles.text];

  if (type === 'rounded') {
    containerStyles.push(styles.containerRounded);
  }

  if (outlinePrimary === true) {
    containerStyles.push(styles.containerOutlinePrimary);
    textStyles.push(styles.textOutlinePrimary);
  }

  return (
    <TouchableOpacity onPress={onPress} style={[containerStyles, style]}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
