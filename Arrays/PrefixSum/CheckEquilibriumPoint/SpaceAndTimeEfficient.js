const mostEfficientApproach = (inputArr) => {
  let totalSum = 0;
  let lSum = 0;
  for (let index = 0; index < inputArr.length; index++) {
    totalSum += inputArr[index];
  }
  for (let index = 0; index < inputArr.length; index++) {
    if (lSum === totalSum - inputArr[index]) {
        console.log(`equilibrium found at index ${index} having value ${inputArr[index]}`)
      return true;
    }
    lSum += inputArr[index];
    totalSum -= inputArr[index];
  }
  return false;
};

console.log(mostEfficientApproach([3, 4, 8, -9, 20, 6]));
