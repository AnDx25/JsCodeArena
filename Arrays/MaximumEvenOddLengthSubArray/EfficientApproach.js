import maxValue from "../../Utils/Max.js";

const efficientApproach = (inputArr = []) => {
  let maximumLength = 1;
  let count = 1;
  for (let index = 0; index < inputArr.length - 1; index++) {
    if (
      (inputArr[index] % 2 === 0 && inputArr[index + 1] % 2 !== 0) ||
      (inputArr[index] % 2 !== 0 && inputArr[index + 1] % 2 === 0)
    ) {
      count++;
      maximumLength = maxValue(count, maximumLength);
    } else {
      count = 1;
    }
  }
  return maximumLength;
};
export default efficientApproach;
