const getRandomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getArrayRandomElement = (array) => array[getRandomNumberInRange(0, array.length - 1)];

const calculateArithmeticResult = (numberA, numberB, operation) => {
  let result;

  switch (operation) {
    case '-':
      result = numberA - numberB;
      break;
    case '*':
      result = numberA * numberB;
      break;
    default:
      result = numberA + numberB;
  }

  return result;
};

export {
  getArrayRandomElement,
  getRandomNumberInRange,
  calculateArithmeticResult,
};
