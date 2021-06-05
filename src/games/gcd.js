import { getRandomNumberInRange } from '../utils.js';
import startGame from '../index.js';

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

const generateConditions = () => {
  const firstNumber = getRandomNumberInRange(0, 100);
  const secondNumber = getRandomNumberInRange(0, 100);

  const quizQuestion = `${firstNumber} ${secondNumber}`;
  const answer = String(findGcd(firstNumber, secondNumber));

  return [quizQuestion, answer];
};

export default () => {
  startGame(description, generateConditions);
};
