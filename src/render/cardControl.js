const getCardControl = (isFavourite) => `<div class="card__control">
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

export default getCardControl;
