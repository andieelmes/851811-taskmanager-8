export const getRandomInt = (min, max) => Math.floor(Math.random() * Math.floor((max - min) + 1) + min);

export const populateDom = (array, parentElement, render, clear = false) => {
  const fragment = document.createElement(`template`);
  array.forEach((item) => {
    fragment.innerHTML += render(item);
  });

  if (clear) {
    parentElement.innerHTML = ``;
  }
  parentElement.appendChild(fragment.content);
};
