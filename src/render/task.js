import {
  populateDom,
  getRandomInt,
  getRandomElements
} from '../utils';

import makeTaskHashtag from './taskHashtag';
import {
  getCardControl,
  getColorInputs,
  getRepeatInputs
} from '../data/templates';

import task from '../data/task';

const tasksElement = document.querySelector(`.board__tasks`);
const defaultNumberOfTasks = getRandomInt(5, 10);
const makeTaskHashtags = (hashtags) => [...hashtags].reduce((totalHashtags, hashtag) => totalHashtags + makeTaskHashtag(hashtag), ``);

const makeTask = (config, edit = false) => {
  const {
    title,
    dueDate,
    tags,
    type,
    picture,
    color,
    repeatingDays,
    isFavorite,
  } = config;

  const randomTags = getRandomElements(tags, getRandomInt(3, 5));
  const hasRepeatingDays = repeatingDays.some((day) => day[1] === true);

  return `<article class="card
      card--${color}
      ${type ? `card--${type}` : ``}
      ${edit ? `card--edit` : ``}
    ">
      <form class="card__form" method="get">
        <div class="card__inner">
          ${getCardControl(isFavorite)}
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
              >${title}</textarea
              >
            </label>
          </div>

          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <button class="card__date-deadline-toggle" type="button">
                  date: <span class="card__date-status">${dueDate ? `yes` : `no`}</span>
                </button>

                <fieldset class="card__date-deadline" ${dueDate ? `` : `disabled`}>
                  <label class="card__input-deadline-wrap">
                    <input
                      class="card__date"
                      type="text"
                      placeholder="${new Date().toLocaleDateString(`en-gb`, {month: `long`, day: `numeric`})}"
                      value="${new Date(dueDate).toLocaleDateString(`en-gb`, {month: `long`, day: `numeric`})}"
                      name="date"
                    />
                  </label>
                  <label class="card__input-deadline-wrap">
                    <input
                      class="card__time"
                      type="text"
                      placeholder="${new Date().toLocaleTimeString(`en-us`, {hour: `2-digit`, minute: `2-digit`})}"
                      value="${new Date(dueDate).toLocaleTimeString(`en-us`, {hour: `2-digit`, minute: `2-digit`})}"
                      name="time"
                    />
                  </label>
                </fieldset>

                <button class="card__repeat-toggle" type="button">
                  repeat:<span class="card__repeat-status">${hasRepeatingDays ? `yes` : `no`}</span>
                </button>

                <fieldset class="card__repeat-days" ${hasRepeatingDays ? `` : `disabled`}>
                  <div class="card__repeat-days-inner">
                    ${getRepeatInputs(repeatingDays)}
                  </div>
                </fieldset>
              </div>

              <div class="card__hashtag">
                <div class="card__hashtag-list">
                ${makeTaskHashtags(randomTags)}

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
          </div>
          <label class="card__img-wrap ${edit ? `` : `card__img-wrap--empty`}">
            <input
              type="file"
              class="card__img-input visually-hidden"
              name="img"
            />
            <img
              src="${picture}"
              alt="task picture"
              class="card__img"
            />
          </label>
          ${getColorInputs(color)}
        </div>
        <div class="card__status-btns">
          <button class="card__save" type="submit">save</button>
          <button class="card__delete" type="button">delete</button>
        </div>
      </div>
    </form>
  </article>`;
};

const getTasks = (numberOfTasks = defaultNumberOfTasks, randomEditingTaskIndex = 0) => {
  return new Array(numberOfTasks).fill(``).map((taskEl, index) => makeTask(task(), index === randomEditingTaskIndex));
};

const renderTasks = (numberOfTasks = defaultNumberOfTasks) => {
  const randomEditingTaskIndex = getRandomInt(0, numberOfTasks);
  const tasks = getTasks(numberOfTasks, randomEditingTaskIndex);
  populateDom({
    array: tasks,
    parentElement: tasksElement,
    clear: true,
    fromMock: false
  });
};

export default renderTasks;
