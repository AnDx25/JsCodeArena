const efficientMinimumConsecutiveFlips = (inputArray = []) => {
  for (let index = 1; index < inputArray.length; index++) {
    if (inputArray[index] !== inputArray[index - 1]) {
      //Checking if this element is second group or not
      if (inputArray[index] !== inputArray[0]) {
        console.log(`From ${index} to`);
      } else {
        console.log(`${index - 1}`);
      }
    }
  }
  //To handle case when the last element is the ending of a group and it is not same as first group
  if (inputArray[inputArray.length - 1] !== inputArray[0]) {
    console.log(`${n - 1}`);
  }
};
export default efficientMinimumConsecutiveFlips;
