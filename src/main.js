import {populateDom} from './utils';

import filterMocks from './data/filters';

import makeFilter from './render/filter';
import renderTasks from './render/task';
import subscribeToFilterClicks from './actions/filter';

const filtersElement = document.querySelector(`.main__filter`);

const init = () => {
  populateDom({
    array: filterMocks,
    parentElement: filtersElement,
    render: makeFilter,
    clear: true
  });
  renderTasks();
  subscribeToFilterClicks();
};

init();
