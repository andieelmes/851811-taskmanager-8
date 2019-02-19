'use strict';

const getRandomInt = (min, max) => Math.floor(Math.random() * Math.floor((max - min) + 1) + min);

const populateDom = (array, parentElement, render, clear = false) => {
  const fragment = document.createElement(`template`);
  array.forEach((item) => {
    fragment.innerHTML += render(item);
  });

  if (clear) {
    parentElement.innerHTML = ``;
  }
  parentElement.appendChild(fragment.content);
};

const filterMocks = [
  {
    name: `all`,
    count: 120,
  },
  {
    name: `overdue`,
    count: 3,
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
    count: 23,
  },
  {
    name: `tags`,
    count: 56,
  },
  {
    name: `archive`,
    count: 21,
  },
];

const taskMocks = [
  {
    color: `black`,
    type: `repeat`,
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
  },
  {
    color: `yellow`,
    type: `deadline`,
    text: `Many desktop publishing packages and web page editors now use Lorem Ipsum as their`
  },
  {
    color: `pink`,
    type: `repeat`,
    text: `Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil)`,
  },
  {
    color: `green`,
    type: `deadline`,
    text: `All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. `,
  },
  {
    color: `blue`,
    type: `repeat`,
    text: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
  },
  {
    color: `yellow`,
    type: `deadline`,
    text: `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    color: `black`,
    type: `repeat`,
    text: `If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text`,
  },
];

const makeFilter = (config) => {
  const {
    name,
    numberOfTasks,
    checked,
    disabled,
  } = config;
  const count = numberOfTasks || getRandomInt(1, 100);
  return `<input
    type="radio"
    id="filter__${name}"
    class="filter__input visually-hidden"
    name="filter"
    ${checked ? `checked` : ``}
    ${disabled ? `disabled` : ``}
  />
  <label for="filter__${name}" class="filter__label">
    ${name.toUpperCase()}
    <span class="filter__all-count">${count}</span>
  </label
  > `;
};

const renderFilters = () => {
  const filtersElement = document.querySelector(`.main__filter`);
  populateDom(filterMocks, filtersElement, makeFilter, true);
};

const makeTask = (config) => {
  const {
    color,
    type,
    text,
  } = config;
  return `<article class="card card--${color} card--${type}">
    <form class="card__form" method="get">
      <div class="card__inner">
        <div class="card__control">
          <button type="button" class="card__btn card__btn--edit">
            edit
          </button>
          <button type="button" class="card__btn card__btn--archive">
            archive
          </button>
          <button
            type="button"
            class="card__btn card__btn--favorites card__btn--disabled"
          >
            favorites
          </button>
        </div>

        <div class="card__color-bar">
          <svg class="card__color-bar-wave" width="100%" height="10">
            <use xlink:href="#wave"></use>
          </svg>
        </div>

        <div class="card__textarea-wrap">
          <label>
            <textarea
              class="card__text"
              placeholder="Start typing your text here..."
              name="text"
            >${text}</textarea
            >
          </label>
        </div>

        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <button class="card__date-deadline-toggle" type="button">
                date: <span class="card__date-status">no</span>
              </button>

              <fieldset class="card__date-deadline" disabled>
                <label class="card__input-deadline-wrap">
                  <input
                    class="card__date"
                    type="text"
                    placeholder="23 September"
                    name="date"
                  />
                </label>
                <label class="card__input-deadline-wrap">
                  <input
                    class="card__time"
                    type="text"
                    placeholder="11:15 PM"
                    name="time"
                  />
                </label>
              </fieldset>

              <button class="card__repeat-toggle" type="button">
                repeat:<span class="card__repeat-status">no</span>
              </button>

              <fieldset class="card__repeat-days" disabled>
                <div class="card__repeat-days-inner">
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-mo-2"
                    name="repeat"
                    value="mo"
                  />
                  <label class="card__repeat-day" for="repeat-mo-2"
                    >mo</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-tu-2"
                    name="repeat"
                    value="tu"
                    checked
                  />
                  <label class="card__repeat-day" for="repeat-tu-2"
                    >tu</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-we-2"
                    name="repeat"
                    value="we"
                  />
                  <label class="card__repeat-day" for="repeat-we-2"
                    >we</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-th-2"
                    name="repeat"
                    value="th"
                  />
                  <label class="card__repeat-day" for="repeat-th-2"
                    >th</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-fr-2"
                    name="repeat"
                    value="fr"
                    checked
                  />
                  <label class="card__repeat-day" for="repeat-fr-2"
                    >fr</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    name="repeat"
                    value="sa"
                    id="repeat-sa-2"
                  />
                  <label class="card__repeat-day" for="repeat-sa-2"
                    >sa</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-su-2"
                    name="repeat"
                    value="su"
                    checked
                  />
                  <label class="card__repeat-day" for="repeat-su-2"
                    >su</label
                  >
                </div>
              </fieldset>
            </div>

            <div class="card__hashtag">
              <div class="card__hashtag-list">
                <span class="card__hashtag-inner">
                  <input
                    type="hidden"
                    name="hashtag"
                    value="repeat"
                    class="card__hashtag-hidden-input"
                  />
                  <button type="button" class="card__hashtag-name">
                    #repeat
                  </button>
                  <button type="button" class="card__hashtag-delete">
                    delete
                  </button>
                </span>

                <span class="card__hashtag-inner">
                  <input
                    type="hidden"
                    name="hashtag"
                    value="repeat"
                    class="card__hashtag-hidden-input"
                  />
                  <button type="button" class="card__hashtag-name">
                    #cinema
                  </button>
                  <button type="button" class="card__hashtag-delete">
                    delete
                  </button>
                </span>

                <span class="card__hashtag-inner">
                  <input
                    type="hidden"
                    name="hashtag"
                    value="repeat"
                    class="card__hashtag-hidden-input"
                  />
                  <button type="button" class="card__hashtag-name">
                    #entertaiment
                  </button>
                  <button type="button" class="card__hashtag-delete">
                    delete
                  </button>
                </span>
              </div>

              <label>
                <input
                  type="text"
                  class="card__hashtag-input"
                  name="hashtag-input"
                  placeholder="Type new hashtag here"
                />
              </label>
            </div>
          </div>

          <label class="card__img-wrap card__img-wrap--empty">
            <input
              type="file"
              class="card__img-input visually-hidden"
              name="img"
            />
            <img
              src="img/add-photo.svg"
              alt="task picture"
              class="card__img"
            />
          </label>

          <div class="card__colors-inner">
            <h3 class="card__colors-title">Color</h3>
            <div class="card__colors-wrap">
              <input
                type="radio"
                id="color-black-2"
                class="card__color-input card__color-input--black visually-hidden"
                name="color"
                value="black"
              />
              <label
                for="color-black-2"
                class="card__color card__color--black"
                >black</label
              >
              <input
                type="radio"
                id="color-yellow-2"
                class="card__color-input card__color-input--yellow visually-hidden"
                name="color"
                value="yellow"
              />
              <label
                for="color-yellow-2"
                class="card__color card__color--yellow"
                >yellow</label
              >
              <input
                type="radio"
                id="color-blue-2"
                class="card__color-input card__color-input--blue visually-hidden"
                name="color"
                value="blue"
              />
              <label
                for="color-blue-2"
                class="card__color card__color--blue"
                >blue</label
              >
              <input
                type="radio"
                id="color-green-2"
                class="card__color-input card__color-input--green visually-hidden"
                name="color"
                value="green"
              />
              <label
                for="color-green-2"
                class="card__color card__color--green"
                >green</label
              >
              <input
                type="radio"
                id="color-pink-2"
                class="card__color-input card__color-input--pink visually-hidden"
                name="color"
                value="pink"
                checked
              />
              <label
                for="color-pink-2"
                class="card__color card__color--pink"
                >pink</label
              >
            </div>
          </div>
        </div>

        <div class="card__status-btns">
          <button class="card__save" type="submit">save</button>
          <button class="card__delete" type="button">delete</button>
        </div>
      </div>
    </form>
  </article>`;
};

const renderTasks = (numberOfTasks = taskMocks.length) => {
  const tasksElement = document.querySelector(`.board__tasks`);
  const mockArray = taskMocks.slice(0, numberOfTasks);
  populateDom(mockArray, tasksElement, makeTask, true);
};

const onFilterClick = () => {
  const numberOfTasks = getRandomInt(2, taskMocks.length);
  renderTasks(numberOfTasks);
};

const subscribeToFilterClicks = () => {
  const filters = document.querySelectorAll(`.filter__label`);
  filters.forEach((filter) => {
    filter.addEventListener(`click`, onFilterClick);
  });
};

const init = () => {
  renderFilters();
  renderTasks();
  subscribeToFilterClicks();
};

init();
