import makeColors from '../render/color';

export const cardСontrol = `<div class="card__control">
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
    </div>`;

const colors = [`black`, `yellow`, `blue`, `green`, `pink`];

export const colorInputs = () => {
  return `<div class="card__colors-inner">
    <h3 class="card__colors-title">Color</h3>
    <div class="card__colors-wrap">
      ${makeColors(colors)}
    </div>
  </div>`;
};
