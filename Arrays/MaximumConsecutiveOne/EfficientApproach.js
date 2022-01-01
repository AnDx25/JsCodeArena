import maxValue from "../../Utils/Max.js";

const maximumConsecutiveOne = (arr = []) => {
  let result = 0;
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      currentSum = 0;
    } else {
      currentSum++;
      result = maxValue(currentSum, result);
    }
  }
  return result;
};
export default maximumConsecutiveOne;
