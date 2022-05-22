export const efficientTrailingZero = (number) => {
  let result = 0;
  for (let i = 5; i <= number; i = i * 5) {
    result = result + number / i;
  }
  return result;
};
console.log(efficientTrailingZero(10));
