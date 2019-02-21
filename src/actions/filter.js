import {MIN_NUMBER_OF_TASKS} from '../constants';

import taskMocks from '../data/tasks';
import {getRandomInt} from '../utils';
import renderTasks from '../render/task';

const onFilterClick = () => {
  const numberOfTasks = getRandomInt(MIN_NUMBER_OF_TASKS, taskMocks.length);
  renderTasks(numberOfTasks);
};

const subscribeToFilterClicks = () => {
  const filters = document.querySelectorAll(`.filter__label`);
  filters.forEach((filter) => {
    filter.addEventListener(`click`, onFilterClick);
  });
};

export default subscribeToFilterClicks;
