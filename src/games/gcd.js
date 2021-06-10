import { getRandom } from '../utils.js';
import startGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (a === 0) {
    return b;
  }

  return findGcd(b % a, a);
};

const generateConditions = () => {
  const firstNumber = getRandom(0, 100);
  const secondNumber = getRandom(0, 100);

  const quizQuestion = `${firstNumber} ${secondNumber}`;
  const answer = String(findGcd(firstNumber, secondNumber));

  return [quizQuestion, answer];
};

export default () => {
  startGame(description, generateConditions);
};
