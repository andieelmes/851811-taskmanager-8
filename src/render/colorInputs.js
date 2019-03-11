import {COLORS} from '../constants';

import makeColors from './colors';

const getColorInputs = (currentColor) => `<div class="card__colors-inner">
    <h3 class="card__colors-title">Color</h3>
    <div class="card__colors-wrap">
      ${makeColors(COLORS, currentColor)}
    </div>
  </div>`;

export default getColorInputs;
