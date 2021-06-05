import { getRandomNumberInRange } from '../utils.js';
import startGame from '../index.js';

const MIN_LENGTH = 5;
const MAX_LENGTH = 15;
const MAX_DIFF = 15;

const description = 'What number is missing in the progression?';

const makeArithmeticProgression = (start, diff, length) => {
  const result = [];

  for (let i = start; result.length <= length; i += diff) {
    result.push(i);
  }

  return result;
};

const generateConditions = () => {
  const progressionDiff = getRandomNumberInRange(1, MAX_DIFF);
  const progressionLength = getRandomNumberInRange(MIN_LENGTH, MAX_LENGTH);
  const startPosition = getRandomNumberInRange(0, 100);

  const progression = makeArithmeticProgression(startPosition, progressionDiff, progressionLength);

  const elementIndex = getRandomNumberInRange(0, progression.length - 1);
  const maskedProgression = [...progression.slice(0, elementIndex), '..', ...progression.slice(elementIndex + 1)].join(' ');

  const quizQuestion = maskedProgression;
  const answer = String(progression[elementIndex]);

  return [quizQuestion, answer];
};

export default () => {
  startGame(description, generateConditions);
};
