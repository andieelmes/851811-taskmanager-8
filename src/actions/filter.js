import renderTasks from './tasks';

const onFilterClick = (numberOfTasks) => {
  renderTasks(numberOfTasks);
};

const subscribeToFilterClicks = (filterMocks) => {
  const filters = document.querySelectorAll(`.filter__label`);
  filters.forEach((filter) => {
    const filterName = filter.childNodes[0].textContent.trim().toLowerCase();
    const numberOfTasks = filterMocks.find((filterMock) => filterMock.name === filterName).numberOfTasks;
    filter.addEventListener(`click`, () => onFilterClick(numberOfTasks));
  });
};

export default subscribeToFilterClicks;
