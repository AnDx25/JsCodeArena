const efficientMajorityElement = (inputArray = []) => {
  /**PHASE 1 */
  //stating that 0th index is the majority element
  let result = 0;
  //initializing count of 0th index as 1
  let count = 1;
  for (let index = 1; index < inputArray.length; index++) {
    if (inputArray[result] === inputArray[index]) {
      count++;
    } else {
      count--;
    }
    if (count === 0) {
      result = index;
      count = 1;
    }
  }
  /**PHASE 2 */
  let finalCount = 0;
  for (let index = 0; index < inputArray.length; index++) {
    if (inputArray[result] === inputArray[index]) {
      finalCount++;
    }
  }
  if (finalCount <= inputArray.length / 2) return -1;
  return inputArray[result];
};
export default efficientMajorityElement;
