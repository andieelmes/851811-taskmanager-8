import {
  TOTAL_NUMBER_OF_TASKS,
  MIN_NUMBER_OF_TASKS,
  MAX_NUMBER_OF_TASKS,
} from '../constants';
import {getRandomInt} from '../utils';


const filterMocks = [
  {
    name: `all`,
    numberOfTasks: TOTAL_NUMBER_OF_TASKS,
  },
  {
    name: `overdue`,
    checked: true,
    numberOfTasks: getRandomInt(MIN_NUMBER_OF_TASKS, MAX_NUMBER_OF_TASKS),
  },
  {
    name: `today`,
    disabled: true,
    numberOfTasks: getRandomInt(MIN_NUMBER_OF_TASKS, MAX_NUMBER_OF_TASKS),
  },
  {
    name: `favorites`,
    disabled: true,
    numberOfTasks: getRandomInt(MIN_NUMBER_OF_TASKS, MAX_NUMBER_OF_TASKS),
  },
  {
    name: `repeating`,
    numberOfTasks: getRandomInt(MIN_NUMBER_OF_TASKS, MAX_NUMBER_OF_TASKS),
  },
  {
    name: `tags`,
    numberOfTasks: getRandomInt(MIN_NUMBER_OF_TASKS, MAX_NUMBER_OF_TASKS),
  },
  {
    name: `archive`,
    numberOfTasks: getRandomInt(MIN_NUMBER_OF_TASKS, MAX_NUMBER_OF_TASKS),
  },
];

export default filterMocks;
