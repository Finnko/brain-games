#!/usr/bin/env node

import initGame from '../src/index.js';

const description = 'What number is missing in the progression?';

const result = initGame('progression', description);

console.log(result);
