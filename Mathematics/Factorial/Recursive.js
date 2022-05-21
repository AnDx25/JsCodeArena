export const FactorialRecursive = (number) => {
  if (number === 0) {
    return 1;
  }
  return number * FactorialRecursive(number - 1);
};
console.log(FactorialRecursive(5));
