import {populateDom} from '../utils';

import makeTaskHashtag from './task-hashtag';
import {
  buttons,
  colorInputs
} from '../data/templates';

import taskMocks from '../data/tasks';

const tasksElement = document.querySelector(`.board__tasks`);

const makeTaskHashtags = (arr) => arr.map((item) => makeTaskHashtag(item)).reduce((acc, current) => acc + current, ``);

const makeTask = (config) => {
  const {
    color,
    type,
    text,
    hashtags
  } = config;
  return `<article class="card card--${color} card--${type}">
    <form class="card__form" method="get">
      <div class="card__inner">
        ${buttons}
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
              ${makeTaskHashtags(hashtags)}

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
        ${colorInputs}
        <div class="card__status-btns">
          <button class="card__save" type="submit">save</button>
          <button class="card__delete" type="button">delete</button>
        </div>
      </div>
    </form>
  </article>`;
};

const renderTasks = (numberOfTasks = taskMocks.length) => {
  const mockArray = taskMocks.slice(0, numberOfTasks);
  populateDom(mockArray, tasksElement, makeTask, true);
};

export default renderTasks;
