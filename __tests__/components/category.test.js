import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Category from '../../app/components/category';

describe('Component: Category', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<Category />);
    expect(wrapper).toMatchSnapshot();
  });

  it('render with correctyle label', () => {
    const wrapper = shallow(<Category />);
    const label = 'My Category';
    wrapper.setProps({ label });
    const wrapperLabel = wrapper.find('Text').children().text();
    expect(wrapperLabel).toEqual(label);
  });

});