import nanoid from 'nanoid';

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

const makeColors = (colors, chosenColor) => {
  return colors.map((color) => makeColor(color, color === chosenColor)).join(``);
};

export default makeColors;
