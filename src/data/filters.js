import {TOTAL_NUMBER_OF_TASKS} from '../constants';

const filterMocks = [
  {
    name: `all`,
    numberOfTasks: TOTAL_NUMBER_OF_TASKS,
  },
  {
    name: `overdue`,
    checked: true,
  },
  {
    name: `today`,
    disabled: true,
  },
  {
    name: `favorites`,
    disabled: true,
  },
  {
    name: `repeating`,
  },
  {
    name: `tags`,
  },
  {
    name: `archive`,
  },
];

export default filterMocks;
