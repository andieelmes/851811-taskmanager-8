import {
  getRandomInt,
  getRandomBool
} from '../utils';

import {COLORS} from '../constants';

const getTask = () => {
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
    color: COLORS[getRandomInt(0, 4)],
    repeatingDays: [`mo`, `tu`, `we`, `th`, `fr`, `sa`, `su`].map((day) => [day, getRandomBool()]),
    isFavorite: getRandomBool(),
  };
};

export default getTask;
