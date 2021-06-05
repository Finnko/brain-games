import { getRandomNumberInRange, getArrayRandomElement, calculateArithmeticResult } from '../utils.js';

import startGame from '../index.js';

const OPERATIONS = ['+', '-', '*'];

const description = 'What is the result of the expression?';


const generateConditions = () => {
  const firstNumber = getRandomNumberInRange(0, 100);
  const secondNumber = getRandomNumberInRange(0, 100);
  const operation = getArrayRandomElement(OPERATIONS);

  const quizQuestion = `${firstNumber} ${operation} ${secondNumber}`;
  const answer = String(calculateArithmeticResult(firstNumber, secondNumber, operation));

  return [quizQuestion, answer];
}

export default () => {
  startGame(description, generateConditions);
};
