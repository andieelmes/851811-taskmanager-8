import nanoid from 'nanoid';

import {
  getRandomInt,
  getRandomElements
} from '../utils';


import {COLORS} from '../constants';

import Component from './taskComponent';

class Task extends Component {
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

    this._onEdit = null;

    this._onEditButtonClick = this._onEditButtonClick.bind(this);
  }

  _isRepeated() {
    return Object.values(this._repeatingDays).some(([, repeat]) => repeat);
  }

  _onEditButtonClick() {
    return typeof this._onEdit === `function` && this._onEdit();
  }

  _getCardControl() {
    return `<div class="card__control">
    <button type="button" class="card__btn card__btn--edit">
      edit
    </button>
    <button type="button" class="card__btn card__btn--archive">
      archive
    </button>
    <button
      type="button"
      class="card__btn card__btn--favorites ${this._isFavourite ? `` : `card__btn--disabled`}"
    >
    ${this._isFavourite ? `favourites` : `fav`}
    </button>
    </div>`;
  }

  _getColorInputs() {
    return `<div class="card__colors-inner">
      <h3 class="card__colors-title">Color</h3>
      <div class="card__colors-wrap">
        ${this._makeColors(COLORS)}
      </div>
    </div>`;
  }

  _getRepeatInputs() {
    const uniqId = nanoid();

    return [...this._repeatingDays].map((day) => {
      const [name, repeats] = day;
      return `<input
          class="visually-hidden card__repeat-day-input"
          type="checkbox"
          id="repeat-${name}-2-${uniqId}"
          name="repeat"
          value="${name}"
          ${repeats ? `checked` : ``}
        />
        <label class="card__repeat-day" for="repeat-${name}-2-${uniqId}"
          >${name}</label
        >`;
    });
  }

  _makeColor(color, checked = false) {
    const uniqId = nanoid();
    return `<input
        type="radio"
        id="color-${color}-2-${uniqId}"
        class="card__color-input card__color-input--${color} visually-hidden"
        name="color"
        value="${color}"
        ${checked ? `checked` : ``}
      />
      <label
        for="color-${color}-2-${uniqId}"
        class="card__color card__color--${color}"
        >${color}</label
      >`;
  }

  _makeColors(colors) {
    const randomCheckedRadioIndex = getRandomInt(0, colors.length);
    return colors.map((color, index) => this._makeColor(color, index === randomCheckedRadioIndex)).join(``);
  }

  _makeTaskHashtag(hashtag) {
    return `<span class="card__hashtag-inner">
      <input
        type="hidden"
        name="hashtag"
        value="repeat"
        class="card__hashtag-hidden-input"
      />
      <button type="button" class="card__hashtag-name">
        #${hashtag}
      </button>
      <button type="button" class="card__hashtag-delete">
        delete
      </button>
    </span>`;
  }

  _makeTaskHashtags(hashtags) {
    return hashtags.reduce((totalHashtags, hashtag) => totalHashtags + this._makeTaskHashtag(hashtag), ``);
  }


  set onEdit(fn) {
    this._onEdit = fn;
  }

  get template() {
    return `<article class="card
      card--${this._color}
      ${this._type ? `card--${this._type}` : ``}
    ">
      <form class="card__form" method="get">
        <div class="card__inner">
          ${this._getCardControl()}
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
                    ${this._getRepeatInputs(this._repeatingDays)}
                  </div>
                </fieldset>
              </div>

              <div class="card__hashtag">
                <div class="card__hashtag-list">
                ${this._makeTaskHashtags(this._randomTags)}

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
          <label class="card__img-wrap card__img-wrap--empty}">
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
          ${this._getColorInputs(this._color)}
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
    this._element.querySelector(`.card__btn--edit`)
        .addEventListener(`click`, this._onEditButtonClick);
  }

  unbind() {
    if (this._element) {
      this._element.querySelector(`.card__btn--edit`)
        .removeEventListener(`click`, this._onEditButtonClick);
    }
  }
}

export default Task;
