import { FactorialRecursive } from "../Factorial/Recursive.js";
export const naiveTrailingZero = (number) => {
  let factorial = FactorialRecursive(number);
  let result = 0;
  while (parseInt(factorial % 10) === 0) {
    result += 1;
    factorial = factorial / 10;
  }
  return result;
};
console.log(naiveTrailingZero(5));
