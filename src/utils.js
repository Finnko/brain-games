const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getArrayRandomElement = (array) => array[getRandom(0, array.length - 1)];

export {
  getArrayRandomElement,
  getRandom,
};
