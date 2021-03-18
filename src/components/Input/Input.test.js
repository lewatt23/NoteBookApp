import {render, fireEvent} from 'react-native-testing-library';
import React from 'react';
import sinon from 'sinon';
import InputArea from './index';

describe('Input testing renders', () => {
  it('with text', () => {
    const wrapper = render(
      <InputArea
        onChange={() => {}}
        placeholder={'Basic textArea for form like password'}
        value={''}
        keyboardTypeOptions={'default'}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
