import maxValue from "../../Utils/Max.js";
export const naiveLCM = (a, b) => {
  let result = maxValue(a, b);
  while (true) {
    if (parseInt(result % a) === 0 && parseInt(result % b) === 0) {
      return result;
    }
    result += 1;
  }
};
console.log(naiveLCM(4, 6));
