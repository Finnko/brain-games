import { getRandom, getArrayRandomElement } from '../utils.js';

import startGame from '../index.js';

const OPERATIONS = ['+', '-', '*'];

const description = 'What is the result of the expression?';

const calculateArithmeticResult = (numberA, numberB, operation) => {
  switch (operation) {
    case '+':
      return numberA + numberB;
    case '-':
      return numberA - numberB;
    case '*':
      return numberA * numberB;
    default:
      throw new Error(`Unexpected operation - '${operation}'`);
  }
};

const generateConditions = () => {
  const firstNumber = getRandom();
  const secondNumber = getRandom();
  const operation = getArrayRandomElement(OPERATIONS);

  const quizQuestion = `${firstNumber} ${operation} ${secondNumber}`;
  const answer = String(calculateArithmeticResult(firstNumber, secondNumber, operation));

  return [quizQuestion, answer];
};

export default () => {
  startGame(description, generateConditions);
};
