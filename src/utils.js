const getRandomNumber = (range = 100) => Math.round(Math.random() * range);

const getArrayRandomElement = (array) => array[getRandomNumber(array.length - 1)];


const compareAnswers = (rightAnswer, userAnswer) => {
  if (rightAnswer !== userAnswer) {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`)
    return false;
  }

  console.log('Correct');
  return true;
}

export {
  getRandomNumber,
  getArrayRandomElement,
  compareAnswers,
}
