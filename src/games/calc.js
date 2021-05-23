import { getRandomNumber, getArrayRandomElement } from '../utils.js';

const OPERATIONS = ['+', '-', '*'];

export default () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const operation = getArrayRandomElement(OPERATIONS);
  let result;

  switch (operation) {
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default:
      result = firstNumber + secondNumber;
  }

  return {
    quizQuestion: `${firstNumber} ${operation} ${secondNumber}`,
    answer: String(result),
  };
};
