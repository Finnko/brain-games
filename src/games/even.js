import { getRandomNumber } from '../utils.js';

const isEven = (num) => num % 2 === 0;

const getAnswer = (num) => (isEven(num) ? 'yes' : 'no');

export default () => {
  const number = getRandomNumber();
  const result = getAnswer(number);

  return {
    quizQuestion: number,
    answer: result,
  };
};
