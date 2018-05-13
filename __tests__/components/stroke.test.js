import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Stroke from '../../app/components/stroke';

describe('Component: Paper', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<Stroke />);
    expect(wrapper).toMatchSnapshot();
  });

});