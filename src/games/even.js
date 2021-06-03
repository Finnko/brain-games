import { getRandomNumberInRange } from '../utils.js';
import startGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getAnswer = (num) => (isEven(num) ? 'yes' : 'no');

export default () => {
  const conditions = {
    generateQuizQuestion: () => getRandomNumberInRange(0, 100),
    getCorrectAnswer: getAnswer,
  };

  startGame(description, conditions);
};
