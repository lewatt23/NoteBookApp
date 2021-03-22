import React from 'react';
import renderer from 'react-test-renderer';
import Button from './index';

describe('Testing the users interface', () => {
  it('Renders snapshot as expected', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
