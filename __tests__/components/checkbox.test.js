import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Checkbox from '../../app/components/checkbox';

describe('Component: Checkbox', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<Checkbox />);
    expect(wrapper).toMatchSnapshot();
  });

  it('render correctyle label', () => {
    const wrapper = shallow(<Checkbox />);
    const expectedLabel = 'Venezuela';
    wrapper.setProps({ label: expectedLabel });
    const label = wrapper.find('Text').children().text();
    expect(label).toEqual(expectedLabel);
  });

  it('render a stroke when is active ', () => {
    const wrapper = shallow(<Checkbox />);
    wrapper.setProps({ active: true });
    const hasStroke = wrapper.find('Stroke').exists();
    expect(hasStroke).toBeTruthy();
  });

  it('render a Checkbox without stroke', () => {
    const wrapper = shallow(<Checkbox />);
    wrapper.setProps({ active: false });
    const hasStroke = wrapper.find('Stroke').exists();
    expect(hasStroke).toBeFalsy();
  });

});