import nanoid from 'nanoid';

const getRepeatInputs = (repeatingDays)  => {
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

export default getRepeatInputs;
