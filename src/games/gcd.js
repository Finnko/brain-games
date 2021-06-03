import { getRandomNumberInRange } from '../utils.js';
import startGame from '../index';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  let firstOperand = Math.abs(a);
  let secondOperand = Math.abs(b);

  while (true) {
    if (secondOperand === 0) {
      return firstOperand;
    }

    firstOperand %= secondOperand;

    if (firstOperand === 0) {
      return secondOperand;
    }

    secondOperand %= firstOperand;
  }
};

export default () => {
  const firstNumber = getRandomNumberInRange();
  const secondNumber = getRandomNumberInRange();

  const result = findGcd(firstNumber, secondNumber);

  return {
    quizQuestion: `${firstNumber} ${secondNumber}`,
    answer: String(result),
  };

  const conditions = {
    generateQuizQuestion: () => `${getRandomNumberInRange(0, 100)} ${getRandomNumberInRange(0, 100)}`,
    getCorrectAnswer: () => ,
  };

  startGame(description, conditions);
};
