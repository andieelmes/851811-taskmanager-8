import {
  getRandomInt,
  getRandomBool
} from '../utils';

import {
  COLORS,
  DAYS
} from '../constants';

const getTask = () => {
  Object.keys(DAYS).map((value) => {
    DAYS[value] = getRandomBool();
  });
  return {
    title: [
      `Изучить теорию`,
      `Сделать домашку`,
      `Пройти интенсив на соточку`,
    ][getRandomInt(0, 2)],
    dueDate: new Date(Date.now()).setDate(getRandomInt(-6, 6)),
    tags: new Set([
      `best ever task`,
      `repeat`,
      `cinema`,
      `cars`,
      `babies`,
      `bathroom`,
      `dogs`,
      `repos`,
      `bitbucket`
    ]),
    type: [
      null,
      `repeat`,
      `deadline`
    ][getRandomInt(0, 2)],
    picture: `//picsum.photos/100/100?r=${Math.random()}`,
    color: COLORS[getRandomInt(0, COLORS.length - 1)],
    repeatingDays: DAYS,
    isFavorite: getRandomBool(),
  };
};

export default getTask;
