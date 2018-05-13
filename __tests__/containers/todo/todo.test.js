import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import Todo from '../../../app/containers/todo/todo';
import {
  blank as tasksEmptyState,
  tasks as TaskList
} from '../../../__mocks__/redux/tasks';

describe('Container: Todo', () => {

  it('should show empty list', () => {
    const store = createMockStore(tasksEmptyState);
    const wrapper = shallow(<Todo />, { context: { store } });
    const wrapperTextBlank = wrapper.dive().find('Text').children().text();
    const existsFlatList = wrapper.dive().find('FlatList').exists();
    const textBlank = 'tap here to create your first task :)';
    expect(wrapperTextBlank).toEqual(textBlank);
    expect(existsFlatList).toBeFalsy();
  });

  it('should show a list', () => {
    const store = createMockStore(TaskList);
    const wrapper = shallow(<Todo />,  { context: { store } });
    const existsFlatList = wrapper.dive().find('FlatList').exists();
    expect(existsFlatList).toBeTruthy();
  });

});
