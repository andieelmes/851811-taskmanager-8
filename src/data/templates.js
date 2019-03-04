import nanoid from 'nanoid';
import makeColors from '../render/color';
import {COLORS} from '../constants';

export const getCardControl = (isFavourite) => `<div class="card__control">
    <button type="button" class="card__btn card__btn--edit">
      edit
    </button>
    <button type="button" class="card__btn card__btn--archive">
      archive
    </button>
    <button
      type="button"
      class="card__btn card__btn--favorites ${isFavourite ? `` : `card__btn--disabled`}"
    >
    ${isFavourite ? `favourites` : `fav`}
    </button>
    </div>`;

export const getColorInputs = () => {
  return `<div class="card__colors-inner">
    <h3 class="card__colors-title">Color</h3>
    <div class="card__colors-wrap">
      ${makeColors(COLORS)}
    </div>
  </div>`;
};

export const getRepeatInputs = (repeatingDays) => {
  const uniqId = nanoid();

  return [...repeatingDays].map((day) => {
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
};
