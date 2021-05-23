import { getRandomNumber } from '../utils.js';

const findGcd = (a, b) => {
  let firstOperand = Math.abs(a);
  let secondOperand = Math.abs(b);

  while (true) {
    if (secondOperand === 0) {
      return firstOperand;
    }

    firstOperand %= secondOperand;

    if (firstOperand === 0) {
      return secondOperand;
    }

    secondOperand %= firstOperand;
  }
};

export default () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();

  const result = findGcd(firstNumber, secondNumber);

  return {
    quizQuestion: `${firstNumber} ${secondNumber}`,
    answer: String(result),
  };
};
