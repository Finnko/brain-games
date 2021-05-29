import { getRandomNumber } from '../utils.js';

const PRIME_RANGE = 1000;

const checkIsPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
};

const getAnswer = (num) => (checkIsPrime(num) ? 'yes' : 'no');

export default () => {
  const number = getRandomNumber(PRIME_RANGE);
  const result = getAnswer(number);

  return {
    quizQuestion: `${number}`,
    answer: result,
  };
};
