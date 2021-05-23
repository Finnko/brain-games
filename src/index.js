import readlineSync from 'readline-sync';
import greetUser from './cli.js';
import { compareAnswers } from './utils.js';
import { getEvenQuestion, getEvenAnswer } from './games/even.js';

const MAX_ATTEMPTS = 3;

const gamesMap = {
  even: {
    question: getEvenQuestion,
    answer: getEvenAnswer,
  }
}


const generateQuestion = (type) => gamesMap[type]['question']();

const generateAnswer = (type, quizQuestion) => gamesMap[type]['answer'](quizQuestion);

const processGameRound = (gameType) => {
  const quizQuestion = generateQuestion(gameType);
  const answer = generateAnswer(gameType, quizQuestion);
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
