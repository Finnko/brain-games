import readlineSync from 'readline-sync';
import {
  generateNumber,
  isEven,
} from '../utils.js';

const MAX_ATTEMPTS = 3;
const RANGE = 100;

const checkAnswer = (num) => (isEven(num) ? 'yes' : 'no');

export const startGame = () => {
  for (let i = 0; i < MAX_ATTEMPTS; i += 1) {
    const number = generateNumber(RANGE);
    const answer = checkAnswer(number);
    const userAnswer = readlineSync.question(`Question: ${number} `);

    if (answer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`)
      return false;
    }

    console.log('Correct');
  }

  return true;
}
