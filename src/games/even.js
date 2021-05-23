import { getRandomNumber } from '../utils.js';

const isEven = (num) => num % 2 === 0;

const getAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const getQuestion = () => getRandomNumber();

export {
  getQuestion as getEvenQuestion,
  getAnswer as getEvenAnswer,
}
