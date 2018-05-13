import { fromJS } from 'immutable';
import {
  UPDATE_FORM_TASK,
  ADD_NEW_TASK,
  TOGGLE_TASK,
  REMOVE_TASK
} from '../actions/types';

const initialState = fromJS({
  form: {
    name: '',
    category: ''
  },
  tasks: {},
});

const updateFormTask = (state, action) => {
  const path = ['form', action.payload.key];
  return state.setIn(path, action.payload.value);
};

const addNewTask = (state, action) => {
  const category = action.payload.category;
  const pathCategory = ['tasks', category];
  const categoryTasks = state.getIn(pathCategory);
  if (!categoryTasks) {
    return state.setIn(pathCategory, [action.payload]);
  }
  categoryTasks.push(action.payload);
  return state.setIn(pathCategory, categoryTasks);
};

const toggleTask = (state, action) => {
  const tasks = state.get('tasks').toJS();
  const toggle = (data) =>
    data.id === action.payload.id && (data.checked = !data.checked)
  const searchAndToggle = (data) => data.forEach(toggle)
  Object.values(tasks).forEach(searchAndToggle);
  return state.merge({ tasks })
};

const removeTask = (state, action) => {
  const tasks = state.get('tasks').toJS();
  const foundTask = (data, index) => data.id === action.payload.id
  const searchAndRemove = (category, index) => {
    const task = tasks[category].filter(foundTask);
    const categoryTasks = tasks[category];
    if (task.length) {
      categoryTasks.splice(categoryTasks.indexOf(task[0]), 1);
    }
    if (!categoryTasks.length) { delete tasks[category]; }
  }
  Object.keys(tasks).forEach(searchAndRemove);
  return state.merge({ tasks });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_TASK:
      return updateFormTask(state, action);
    case ADD_NEW_TASK:
      return addNewTask(state, action);
    case TOGGLE_TASK:
      return toggleTask(state, action);
    case REMOVE_TASK:
      return removeTask(state, action);
    default:
      return state;
  }
}