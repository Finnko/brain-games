const generateNumber = (range) => Math.round(Math.random() * range);

const isEven = (num) => num % 2 === 0;

export {
  generateNumber,
  isEven,
}
