#!/usr/bin/env node
import readlineSync from 'readline-sync';

const MAX_ATTEMPTS = 3;
const RANGE = 100;
const stack = [];

const isEven = (num) => num % 2 === 0;

const checkAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const generateNumber = (range) => Math.round(Math.random() * range);

// const printAnswer = (result) => {
//
// }

// Question: 15
// Your answer: no
// Correct!
//   Question: 6
// Your answer: yes
// Correct!
//   Question: 7
// Your answer: no
// Correct!
//   Congratulations, Sam!
const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  for (let i = 0; i < MAX_ATTEMPTS; i += 1) {
    const number = generateNumber(RANGE);
    const answer = checkAnswer(number);
    const userAnswer = readlineSync.question(`Question: ${number}`);

    console.log({ answer });
    console.log({ userAnswer });
    console.log(typeof answer);
    console.log(typeof userAnswer);
  }
}

game();
