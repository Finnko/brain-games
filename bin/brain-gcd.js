#!/usr/bin/env node

import initGame from '../src';

const description = 'Find the greatest common divisor of given numbers.';

const result = initGame('gcd', description);

console.log(result);
