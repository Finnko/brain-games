import { getRandom } from '../utils.js';
import startGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const generateConditions = () => {
  const number = getRandom();

  const quizQuestion = number;
  const answer = String(getAnswer(number));

  return [quizQuestion, answer];
};

export default () => {
  startGame(description, generateConditions);
};
