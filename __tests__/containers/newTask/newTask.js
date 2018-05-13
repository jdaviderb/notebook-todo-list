import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import NewTask from '../../../app/containers/newTask/newTask';
import {
  formWithData
} from '../../../__mocks__/redux/tasks';

describe('Container: NewTask', () => {

  it('renders correctly', () => {
    const store = createMockStore(formWithData);
    const wrapper = shallow(<NewTask />, { context: { store } });
    const inputs = wrapper.dive().find('TextInput');
    const nameField = inputs.at(0).prop('value');
    const categoryField = inputs.at(1).prop('value');
    expect(inputs.length).toEqual(2);
    expect(nameField).toEqual('Venezuela');
    expect(categoryField).toEqual('countries');
    expect(wrapper).toMatchSnapshot();
  });

});
