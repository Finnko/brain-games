import readlineSync from 'readline-sync';
import greetUser from './cli.js';
import { compareAnswers } from './utils.js';
import { evenGame } from './games/even.js';
import { calcGame } from './games/calc.js';

const MAX_ATTEMPTS = 3;

const gamesMap = {
  even: evenGame,
  calc: calcGame,
}

const generateConditions = (type) => gamesMap[type]();

const processGameRound = (gameType) => {
  const { quizQuestion, answer } = generateConditions(gameType);

  const userAnswer = readlineSync.question(`Question: ${quizQuestion} `);

  return compareAnswers(answer, userAnswer);
}

export const initGame = (gameType) => {
  const name = greetUser();
  const congratSequence = `Congratulations, ${name}!`;
  const looseSequence = `Let's try again, ${name}!`;
  let resultOfGame = true;

  for (let i = 0; i < MAX_ATTEMPTS; i += 1) {
    const gameRoundResult = processGameRound(gameType);

    if (!gameRoundResult) {
      resultOfGame = false;
      break;
    }
  }

  return resultOfGame ? congratSequence : looseSequence;
}
