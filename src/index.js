import readlineSync from 'readline-sync';

const MAX_ATTEMPTS = 3;

const processGameRound = (conditions) => {
  const { generateQuizQuestion, getCorrectAnswer } = conditions;
  const quizQuestion = generateQuizQuestion();
  const answer = getCorrectAnswer(quizQuestion);

  const userAnswer = readlineSync.question(`Question: ${quizQuestion} `);

  if (answer !== userAnswer) {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
    return false;
  }

  console.log('Correct');
  return true;
};

export default (gameDescription, conditions) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  const congratsSequence = `Congratulations, ${name}!`;
  const looseSequence = `Let's try again, ${name}!`;

  console.log(gameDescription);

  for (let i = 0; i < MAX_ATTEMPTS; i += 1) {
    const gameRoundResult = processGameRound(conditions);

    if (!gameRoundResult) {
      return looseSequence;
    }
  }

  return congratsSequence;
};
