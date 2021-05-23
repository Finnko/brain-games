import { getRandomNumber, getRandomNumberInRange } from '../utils.js';

const MIN_LENGTH = 5;
const MAX_LENGTH = 15;
const MAX_DIFF = 15;

const makeArithmeticProgression = () => {
  const result = [];
  const diff = getRandomNumberInRange(1, MAX_DIFF);
  const length = getRandomNumberInRange(MIN_LENGTH, MAX_LENGTH);
  const start = getRandomNumber();

  let i = start;

  while (result.length <= length) {
    result.push(i);

    i += diff;
  }

  return result;
};

export default () => {
  const progression = makeArithmeticProgression();
  const elementIndex = getRandomNumberInRange(0, progression.length - 1);

  return {
    quizQuestion: `${[...progression.slice(0, elementIndex), '..', progression.slice(elementIndex + 1)]}`,
    answer: String(progression[elementIndex]),
  };
};
