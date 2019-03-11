import {
  getRandomInt,
  getRandomElements
} from '../utils';

import getCardControl from './cardControl';
import getColorInputs from './colorInputs';
import makeTaskHashtags from './hashtags';
import getRepeatInputs from './repeatInputs';

import Component from './taskComponent';

class TaskEdit extends Component {
  constructor(data) {
    super();
    this._title = data.title;
    this._dueDate = data.dueDate;
    this._tags = data.tags;
    this._type = data.type;
    this._picture = data.picture;
    this._color = data.color;
    this._repeatingDays = data.repeatingDays;
    this._isFavorite = data.isFavorite;

    this._randomTags = getRandomElements(this._tags, getRandomInt(3, 5));

    this._onSubmitButtonClick = this._onSubmitButtonClick.bind(this);
    this._onDeleteButtonClick = this._onDeleteButtonClick.bind(this);

    this._onSubmit = null;
    this._onDelete = null;
  }

  _onSubmitButtonClick(evt) {
    evt.preventDefault();
    return typeof this._onSubmit === `function` && this._onSubmit();
  }

  _onDeleteButtonClick() {
    return typeof this._onDelete === `function` && this._onDelete();
  }

  _isRepeated() {
    return Object.values(this._repeatingDays).some(([, repeat]) => repeat);
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  set onDelete(fn) {
    this._onDelete = fn;
  }

  get template() {
    return `<article class="card
      card--${this._color}
      card--edit
      ${this._type ? `card--${this._type}` : ``}
      ${this._isRepeated() ? `card--repeat` : ``}
    ">
      <form class="card__form" method="get">
        <div class="card__inner">
          ${getCardControl(this._isFavorite)}
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
              >${this._title}</textarea
              >
            </label>
          </div>

          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <button class="card__date-deadline-toggle" type="button">
                  date: <span class="card__date-status">${this._dueDate ? `yes` : `no`}</span>
                </button>

                <fieldset class="card__date-deadline" ${this._dueDate ? `` : `disabled`}>
                  <label class="card__input-deadline-wrap">
                    <input
                      class="card__date"
                      type="text"
                      placeholder="${new Date().toLocaleDateString(`en-gb`, {month: `long`, day: `numeric`})}"
                      value="${new Date(this._dueDate).toLocaleDateString(`en-gb`, {month: `long`, day: `numeric`})}"
                      name="date"
                    />
                  </label>
                  <label class="card__input-deadline-wrap">
                    <input
                      class="card__time"
                      type="text"
                      placeholder="${new Date().toLocaleTimeString(`en-us`, {hour: `2-digit`, minute: `2-digit`})}"
                      value="${new Date(this._dueDate).toLocaleTimeString(`en-us`, {hour: `2-digit`, minute: `2-digit`})}"
                      name="time"
                    />
                  </label>
                </fieldset>

                <button class="card__repeat-toggle" type="button">
                  repeat:<span class="card__repeat-status">${this._isRepeated() ? `yes` : `no`}</span>
                </button>

                <fieldset class="card__repeat-days" ${this._isRepeated() ? `` : `disabled`}>
                  <div class="card__repeat-days-inner">
                    ${getRepeatInputs(this._repeatingDays)}
                  </div>
                </fieldset>
              </div>

              <div class="card__hashtag">
                <div class="card__hashtag-list">
                ${makeTaskHashtags(this._randomTags)}

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
          <label class="card__img-wrap">
            <input
              type="file"
              class="card__img-input visually-hidden"
              name="img"
            />
            <img
              src="${this._picture}"
              alt="task picture"
              class="card__img"
            />
          </label>
          ${getColorInputs(this._color)}
        </div>
        <div class="card__status-btns">
          <button class="card__save" type="submit">save</button>
          <button class="card__delete" type="button">delete</button>
        </div>
      </div>
    </form>
  </article>`.trim();
  }

  bind() {
    this._element.querySelector(`.card__form`)
        .addEventListener(`submit`, this._onSubmitButtonClick);
    this._element.querySelector(`.card__delete`)
        .addEventListener(`click`, this._onDeleteButtonClick);
  }

  unbind() {
    if (this._element) {
      this._element.querySelector(`.card__form`)
        .removeEventListener(`submit`, this._onSubmitButtonClick);
      this._element.querySelector(`.card__delete`)
        .removeEventListener(`click`, this._onDeleteButtonClick);
    }
  }
}

export default TaskEdit;
