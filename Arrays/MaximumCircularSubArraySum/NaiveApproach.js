import maxValue from "../../Utils/Max.js";

const naiveMaximumCircularSubArraySum = (inputArr = []) => {
  let maximumSum = inputArr[0];
  for (let outerIndex = 0; outerIndex < inputArr.length; outerIndex++) {
    let currentSum = 0;
    for (let innerIndex = 0; innerIndex < inputArr.length; innerIndex++) {
      let index = (outerIndex + innerIndex) % inputArr.length;
      currentSum += inputArr[index];
      maximumSum = maxValue(currentSum, maximumSum);
    }
  }
  return maximumSum;
};
export default naiveMaximumCircularSubArraySum;
