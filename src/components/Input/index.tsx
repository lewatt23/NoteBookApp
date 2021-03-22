import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import Icon from 'react-native-vector-icons/Feather';

/**
 * Styles to use for kawlo Inputs
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_two: {
    height: 150,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  },

  containerArea: {
    backgroundColor: 'transparent',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: colors.border,
    color: colors.black,
    textAlignVertical: 'top',
    paddingHorizontal: 10,
  },
  text: {
    color: colors.black,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Raleway-Regular',
  },

  containerOutline: {
    borderWidth: 1,
    color: colors.white,
    backgroundColor: 'transparent',
  },

  error: {
    color: colors.error,
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#dbdbdb',
    color: '#232323',
    borderBottomWidth: 1,
    backgroundColor: colors.white,
    fontFamily: 'Raleway-Regular',
  },
  searchSection_two: {
    borderColor: '#dbdbdb',
    color: '#232323',
    borderBottomWidth: 1,
    backgroundColor: colors.white,
    fontFamily: 'Raleway-Regular',
  },
  icon: {
    padding: 10,
    backgroundColor: 'transparent',
  },
  column: {
    flexDirection: 'column',
  },
});

/**
 * Input used for component
 *
 * @param {Function} onChange - Function to call action
 * @param {value} value - value of the input component can be text, number or any
 * @param {String} placeholder - Placeholder value for Input
 * @param {bool} multiline - Boolean value for multiline text
 * @param {keyboardTypeOptions} keyboardTypeOptions - Help determine which type of keyboard we need
 * @returns {Input} Input with specific params
 *
 */

const Input = ({
  onChange,
  value,

  placeholder,
  outline,
  keyboardTypeOptions,
  secureTextEntry,
  iconName,
  iconDisplay,
  onFocus,
  showSoftInputOnFocus,
}: any) => {
  const containerStyles: any = [styles.container];
  let placeholderTextColor: any = colors.grayLight;
  if (outline === true) {
    containerStyles.push(styles.containerOutline);
    placeholderTextColor = colors.white;
  }

  return (
    <View style={[styles.searchSection]}>
      {iconDisplay && (
        <Icon
          name={iconName}
          style={styles.icon}
          color={colors.black}
          size={20}
        />
      )}

      <TextInput
        style={containerStyles}
        placeholder={placeholder}
        onChangeText={onChange}
        placeholderTextColor={placeholderTextColor}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardTypeOptions}
        onFocus={onFocus}
        showSoftInputOnFocus={showSoftInputOnFocus}
      />
    </View>
  );
};

export default Input;

/**
 * InputBorder used for component
 *
 * @param {Function} onChange - Function to call action
 * @param {value} value - value of the input component can be text, number or any
 * @param {String} placeholder - Placeholder value for Input
 * @param {bool} multiline - Boolean value for multiline text
 * @param {keyboardTypeOptions} keyboardTypeOptions - Help determine which type of keyboard we need
 * @returns {Input} Input with specific params
 *
 */
export const InputArea = ({
  onChange,
  value,

  placeholder,
  outline,
  keyboardTypeOptions,
  secureTextEntry,

  onFocus,
  showSoftInputOnFocus,
}: any) => {
  const containerStyles: any = [styles.container_two];
  let placeholderTextColor: any = colors.grayLight;
  if (outline === true) {
    containerStyles.push(styles.containerOutline);
    placeholderTextColor = colors.white;
  }

  return (
    <View style={[styles.searchSection_two]}>
      <TextInput
        style={containerStyles}
        placeholder={placeholder}
        onChangeText={onChange}
        placeholderTextColor={placeholderTextColor}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardTypeOptions}
        onFocus={onFocus}
        showSoftInputOnFocus={showSoftInputOnFocus}
        numberOfLines={10}
        multiline={true}
      />
    </View>
  );
};
