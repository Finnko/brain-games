#!/usr/bin/env node

import initGame from '../src/index.js';

const description = 'What is the result of the expression?';

const result = initGame('calc', description);

console.log(result);
