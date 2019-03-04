import nanoid from 'nanoid';
import {getRandomInt} from '../utils';

const makeColor = (color, checked = false) => {
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
};

const makeColors = (colors) => {
  const randomCheckedRadioIndex = getRandomInt(0, colors.length);

  return colors.map((color, index) => makeColor(color, index === randomCheckedRadioIndex)).join(``);
};

export default makeColors;
