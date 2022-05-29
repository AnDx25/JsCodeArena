export const efficientPrimeCheck = (number) => {
  if (number === 1) return false;
  if (number === 2 || number === 3) return true;
  if (parseInt(number % 2) === 0 || parseInt(number % 3) === 0) return false;
  for (let i = 5; i <= parseInt(Math.sqrt(number)); i += 6) {
    if (parseInt(number % i) === 0 || parseInt(number % (i + 2)) === 0) {
      return false;
    }
  }
  return true;
};
// console.log(efficientPrimeCheck(13));
