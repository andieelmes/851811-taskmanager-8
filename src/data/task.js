import {
  getRandomInt,
  getRandomBool
} from '../utils';


const task = () => {
  return {
    title: [
      `Изучить теорию`,
      `Сделать домашку`,
      `Пройти интенсив на соточку`,
    ][getRandomInt(0, 2)],
    dueDate: Date.now() + 1 + getRandomInt(0, 6) * 24 * 60 * 60 * 1000,
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
    color: [
      `black`,
      `yellow`,
      `blue`,
      `green`,
      `pink`
    ][getRandomInt(0, 4)],
    repeatingDays: new Map([
      [`mo`, getRandomBool()],
      [`tu`, getRandomBool()],
      [`we`, getRandomBool()],
      [`th`, getRandomBool()],
      [`fr`, getRandomBool()],
      [`sa`, getRandomBool()],
      [`su`, getRandomBool()],
    ]),
    isFavorite: getRandomBool(),
  };
};

export default task;
