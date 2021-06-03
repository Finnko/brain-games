const getRandomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getArrayRandomElement = (array) => array[getRandomNumberInRange(0, array.length - 1)];

export {
  getArrayRandomElement,
  getRandomNumberInRange,
};
