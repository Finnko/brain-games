#!/usr/bin/env node

import initGame from '../src/index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const result = initGame('prime', description);

console.log(result);
