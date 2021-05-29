import readlineSync from 'readline-sync';
import greetUser from './cli.js';
import { compareAnswers } from './utils.js';
import evenGame from './games/even.js';
import calcGame from './games/calc.js';
import gcdGame from './games/gcd.js';
import progressionGame from './games/progression.js';
import primeGame from './games/prime.js';

const MAX_ATTEMPTS = 3;

const gamesMap = {
  even: evenGame,
  calc: calcGame,
  gcd: gcdGame,
  progression: progressionGame,
  prime: primeGame,
};

const generateConditions = (type) => gamesMap[type]();

const processGameRound = (gameType) => {
  const { quizQuestion, answer } = generateConditions(gameType);

  const userAnswer = readlineSync.question(`Question: ${quizQuestion} `);

  return compareAnswers(answer, userAnswer);
};

export default (gameType, gameDescription) => {
  const name = greetUser();
  const congratsSequence = `Congratulations, ${name}!`;
  const looseSequence = `Let's try again, ${name}!`;
  let resultOfGame = true;

  console.log(gameDescription);

  for (let i = 0; i < MAX_ATTEMPTS; i += 1) {
    const gameRoundResult = processGameRound(gameType);

    if (!gameRoundResult) {
      resultOfGame = false;
      break;
    }
  }

  return resultOfGame ? congratsSequence : looseSequence;
};
