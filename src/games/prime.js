import { getRandomNumberInRange } from '../utils.js';
import startGame from '../index.js';

const PRIME_RANGE = 1000;

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkIsPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
};

const getAnswer = (num) => (checkIsPrime(num) ? 'yes' : 'no');

const generateConditions = () => {
  const number = getRandomNumberInRange(0, PRIME_RANGE);

  const quizQuestion = number;
  const answer = String(getAnswer(number));

  return [quizQuestion, answer];
};

export default () => {
  startGame(description, generateConditions);
};
