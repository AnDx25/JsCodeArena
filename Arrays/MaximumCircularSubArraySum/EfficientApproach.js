import maxValue from "../../Utils/Max.js";
import kadensAlgorithm from "../MaximumSumSubArray/EfficientApproach.js";
const efficientMaximumCircularSubArraySum = (inputArray = []) => {
  let normalMaximumSum = kadensAlgorithm(inputArray);
  if (normalMaximumSum < 0) {
    return normalMaximumSum;
  }
  //Finding out Sum for Circular subarray
  let arraySum = 0;
  let invertedArray = [];
  for (let index = 0; index < inputArray.length; index++) {
    arraySum += inputArray[index];
    //inverting array elements
    invertedArray[index] = -inputArray[index];
  }
  let circularMaximumSum = arraySum + kadensAlgorithm(invertedArray);
  return maxValue(normalMaximumSum, circularMaximumSum);
};
export default efficientMaximumCircularSubArraySum;
