function numberOfDigits(n) {
  return Math.floor(Math.log10(n) + 1);
}
console.log(numberOfDigits(123));
