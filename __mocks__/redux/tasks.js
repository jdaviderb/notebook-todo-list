import { fromJS } from 'immutable';

const testTasks = {
  test: [
    {
      category: 'test',
      name: 'tast test 1',
      checked: false
    },
    {
      category: 'test',
      name: 'test test 2',
      checked: false
    }
  ]
};

export const blank = {
  tasks: fromJS({
    form: {
      name: '',
      category: ''
    },
    tasks: {}
  })
};

export const formWithData = {
  tasks: fromJS({
    form: {
      name: 'Venezuela',
      category: 'countries'
    }
  })
};

export const tasks = {
  tasks: fromJS({
    tasks: {
      ...testTasks
    }
  })
};
