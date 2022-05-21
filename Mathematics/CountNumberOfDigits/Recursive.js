function numberOfDigits(n) {
  if (n === 0) {
    return 0;
  }
  return 1 + numberOfDigits(parseInt(n / 10));
}
console.log(numberOfDigits(123));
