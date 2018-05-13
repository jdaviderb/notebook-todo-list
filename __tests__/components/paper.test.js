import React, { Component } from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import Paper from '../../app/components/paper';

describe('Component: Paper', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<Paper />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Render Paper with children ', () => {
    const text = 'Maracaibo';
    const wrapper = shallow((
      <Paper>
        <Text>{text}</Text>
      </Paper>
    ));
    const childrenText = wrapper.find('Text').children().text();
    expect(childrenText).toEqual(text);
  });

});