import maxValue from "../../Utils/Max.js";

const naiveMaximumSumSubArray = (arr = []) => {
  let result = arr[0];
  const length = arr.length;
  for (let outerIndex = 0; outerIndex < length; outerIndex++) {
    let currentSum = 0;
    for (let innerIndex = outerIndex; innerIndex < length; innerIndex++) {
      currentSum += arr[innerIndex];
      result = maxValue(currentSum, result);
    }
  }
  return result;
};
export default naiveMaximumSumSubArray;
