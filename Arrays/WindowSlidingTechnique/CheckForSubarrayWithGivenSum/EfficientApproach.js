const efficientApproach = (inputArr = [], givenSum) => {
  //Intializing pointers and current sum
  let start = 0;
  let currentSum = inputArr[0];
  for (let end = 1; end < inputArr.length; end++) {
    //Clearing the window if currentSum > givenSum
    while (currentSum > givenSum && start < end - 1) {
      //remove the starting point of the window so that we can check sum for next window
      currentSum -= inputArr[start];
      //Sliding the window forward
      start++;
    }
    if (currentSum === givenSum) return true;
    //This means that still elements in the array and current sum <given sum
    if (end < inputArr.length) {
      currentSum += inputArr[end];
    }
  }
  return currentSum === givenSum;
};
export default efficientApproach;
