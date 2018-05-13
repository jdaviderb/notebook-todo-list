import { fromJS } from 'immutable';
import reducer from '../../../app/redux/reducers/tasks';
import {
  UPDATE_FORM_TASK,
  ADD_NEW_TASK,
  REMOVE_TASK,
  TOGGLE_TASK
} from '../../../app/redux/actions/types';
import {
  blank
} from '../../../__mocks__/redux/tasks';
import { red } from 'ansi-colors';

describe('Reducer: Tasks', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {}).equals(blank.tasks))
      .toBeTruthy();
  });

  it('should handle UPDATE_FORM_TASK', () => {
    const action = {
      type: UPDATE_FORM_TASK,
      payload: { key: 'name', value: 'Maracaibo' }
    };
    const path = ['form', action.payload.key];
    expect(reducer(undefined, action).getIn(path))
      .toEqual(action.payload.value);
  });

  it('should handle ADD_NEW_TASK', () => {
    const action = {
      type: ADD_NEW_TASK,
      payload: {
        id: 1,
        name: 'Venezuela',
        category: 'countries',
        checked: false
      }
    };
    const mutateState = fromJS({
      countries: [{ ...action.payload }]
    });
    const tasks = reducer(undefined, action).get('tasks').toJS();
    expect(fromJS(tasks).equals(mutateState))
      .toBeTruthy();
  });

  it('should handle REMOVE_TASK', () => {
    const action = {
      type: REMOVE_TASK,
      payload: { id: 1 }
    };

    const initialState = fromJS({
      tasks: {
        test: [
          {
            id: 1,
            name: 'test task'
          }
        ]
      }
    });
    const mutateState = fromJS({
      tasks: {}
    })
    const tasks = reducer(initialState, action);
    expect(tasks.equals(mutateState))
      .toBeTruthy();
  });

  it('should handle TOGGLE_TASK', () => {
    const action = {
      type: TOGGLE_TASK,
      payload: { id: 1 }
    };

    const initialState = fromJS({
      tasks: {
        test: [
          {
            id: 1,
            name: 'test task',
            checked: true
          }
        ]
      }
    });
    const mutateState = fromJS({
      tasks: {
        test: [
          {
            id: 1,
            name: 'test task',
            checked: false
          }
        ]
      }
    })
    const tasks = reducer(initialState, action);
    expect(tasks.equals(mutateState))
      .toBeTruthy();
  });
});