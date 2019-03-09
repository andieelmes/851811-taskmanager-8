const makeFilter = (config) => {
  const {
    name,
    numberOfTasks,
    checked,
    disabled,
  } = config;

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
  >
    ${name.toUpperCase()}
    <span class="filter__all-count">${numberOfTasks}</span>
  </label
  > `;
};

export default makeFilter;
