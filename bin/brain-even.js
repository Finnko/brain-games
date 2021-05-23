#!/usr/bin/env node

import greetUser from '../src/cli.js';
import { startGame } from '../src/games/even.js';


const name = greetUser();
const congratulation = `Congratulations, ${name}!`;
const loose = `Let's try again, ${name}!`;

const printGameResult = () => {
  const resultOfGame = startGame();

  return resultOfGame ? congratulation : loose;
}

console.log(printGameResult());
