import maxValue from "../../../Utils/Max.js";

const windowSlidingTechnique = (inputArr = [], k) => {
  let currentSum = 0;
  let maximumSum = 0;
  //Calculating sum of first k elements
  for (let index1 = 0; index1 < k; index1++) {
    currentSum += inputArr[index1];
  }
  //Calculating sum of rest of the elements
  for (let index2 = k; index2 < inputArr.length; index2++) {
    currentSum += inputArr[index2] - inputArr[index2 - k];
    maximumSum = maxValue(currentSum, maximumSum);
  }
  return maximumSum;
};
export default windowSlidingTechnique;
