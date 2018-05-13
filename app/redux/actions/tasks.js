import {
  UPDATE_FORM_TASK,
  ADD_NEW_TASK,
  TOGGLE_TASK,
  REMOVE_TASK
} from './types';
import {
  back
} from './navigator';

export const updateForm = (key, value) => ({
  type: UPDATE_FORM_TASK,
  payload: { key, value }
});

export const addNewTask = (payload) => ({
  type: ADD_NEW_TASK,
  payload
});

export const clearForm = () => (dispatch) =>
    dispatch(updateForm('name', '')) &&
      dispatch(updateForm('category', ''))

export const create = () => (dispatch, getState) => {
  const form = getState().tasks.toJS().form;
  const id = Date.now();
  if (!form.name.length) {
    return alert('write a name for the task');
  }
  if (!form.category.length) {
    form.category = 'Uncategorized';
  }
  dispatch(addNewTask({ id, checked: false ,...form }));
  dispatch(clearForm());
  dispatch(back());
};

export const toggle = (id) => ({
  type: TOGGLE_TASK,
  payload: { id }
});

export const remove = (id) => ({
  type: REMOVE_TASK,
  payload: { id }
});