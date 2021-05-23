#!/usr/bin/env node

import initGame from '../src';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const result = initGame('even', description);

console.log(result);
