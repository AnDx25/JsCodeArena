import { euclidModulo } from "../GCD/EfficientApproach/EuclidModulo.js";

export const efficientLCM = (a, b) => {
  const gcd = euclidModulo(a, b);
  return (a * b) / gcd;
};
