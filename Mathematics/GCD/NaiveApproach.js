import minValue from "../../Utils/Min.js";

export const naiveGCD = (a, b) => {
  let result = minValue(a, b);
  while (result > 0) {
    if (a % result === 0 && b % result === 0) {
      break;
    }
    result -= 1;
  }
  return result;
};
