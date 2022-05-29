export const naivePrimeCheck = (number) => {
  if (number === 1) return false;
  for (let i = 2; i < number; i++) {
    if (parseInt(number % i) === 0) {
      return false;
    }
  }
  return true;
};
// console.log(naivePrimeCheck(14));
