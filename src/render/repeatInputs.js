import nanoid from 'nanoid';

const getRepeatInputs = (repeatingDays) => {
  const uniqId = nanoid();

  return Object.keys(repeatingDays).map((name) => {
    const repeats = repeatingDays[name];
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

export default getRepeatInputs;
