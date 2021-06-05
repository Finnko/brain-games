import readlineSync from 'readline-sync';

const MAX_ATTEMPTS = 3;

const processGameRound = (generateConditions) => {
  const [quizQuestion, correctAnswer] = generateConditions();

  const userAnswer = readlineSync.question(`Question: ${quizQuestion} `);

  if (correctAnswer !== userAnswer) {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    return false;
  }

  console.log('Correct');
  return true;
};

export default (gameDescription, generateConditions) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  const congratsSequence = `Congratulations, ${name}!`;
  const looseSequence = `Let's try again, ${name}!`;

  console.log(gameDescription);

  for (let i = 0; i < MAX_ATTEMPTS; i += 1) {
    const gameRoundResult = processGameRound(generateConditions);

    if (!gameRoundResult) {
      console.log(looseSequence);
      return;
    }
  }

  console.log(congratsSequence);
};
