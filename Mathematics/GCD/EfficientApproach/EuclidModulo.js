export const euclidModulo = (a, b) => {
  if (b === 0) {
    return a;
  }
  return euclidModulo(b, parseInt(a % b));
};
// console.log(euclidModulo(12, 15));
