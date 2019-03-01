import renderTasks from '../render/task';

const onFilterClick = (e) => {
  const numberOfTasks = e.target.closest(`.filter__label`).getAttribute(`data-number-of-tasks`);
  renderTasks(numberOfTasks);
};

const subscribeToFilterClicks = () => {
  const filters = document.querySelectorAll(`.filter__label`);
  filters.forEach((filter) => {
    filter.addEventListener(`click`, onFilterClick);
  });
};

export default subscribeToFilterClicks;
