import maxValue from "../../../Utils/Max.js";

const naiveMaximumKConsecutiveSum = (inputArray = [], k) => {
  
  let maximumSum = 0;
  for (let outerIndex = 0; outerIndex+k-1 < inputArray.length; outerIndex++) {
    let currentSum = 0;
    for (let innerIndex = 0; innerIndex < k; innerIndex++) {
      currentSum += inputArray[outerIndex + innerIndex];
    }
    maximumSum = maxValue(currentSum, maximumSum);
  }
  return maximumSum;
};
export default naiveMaximumKConsecutiveSum;
