const sumDigits = (inputNumber = 0, sum = 0) => {
  return inputNumber === 0 ? sum : sumDigits(parseInt(inputNumber / 10), (sum += inputNumber % 10));
};
export default sumDigits;
