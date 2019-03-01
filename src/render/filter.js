import {getRandomInt} from '../utils';

const makeFilter = (config) => {
  const {
    name,
    checked,
    disabled,
  } = config;

  let {numberOfTasks = getRandomInt(1, 15)} = config;
  if (name === `all`) {
    numberOfTasks = 30;
  }

  return `<input
    type="radio"
    id="filter__${name}"
    class="filter__input visually-hidden"
    name="filter"
    ${checked ? `checked` : ``}
    ${disabled ? `disabled` : ``}
  />
  <label
    for="filter__${name}"
    class="filter__label"
    data-number-of-tasks="${numberOfTasks}"
  >
    ${name.toUpperCase()}
    <span class="filter__all-count">${numberOfTasks}</span>
  </label
  > `;
};

export default makeFilter;
