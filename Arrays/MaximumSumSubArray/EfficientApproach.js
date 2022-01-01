import maxValue from "../../Utils/Max.js";

const efficientMaximumSumSubArray = (arr = []) => {
  let result = arr[0];
  let maxEnding = arr[0];
  for (let index = 1; index < arr.length; index++) {
    maxEnding = maxValue(maxEnding + arr[index], arr[index]);
    result = maxValue(result, maxEnding);
  }
  return result;
};
export default efficientMaximumSumSubArray;
