const efficientApproach = (startRangeEl = [], endRangeEl = []) => {
  //Initializing array with 1000 elements
  let countArray = Array(1000).fill(0);
  //Incrementing count for countArray[L[i]] and decrementing countArray[R[i]+1]
  for (let index = 0; index < countArray.length; index++) {
    countArray[startRangeEl[index]]++;
    countArray[endRangeEl[index] + 1]--;
  }
  let maximumCount = 0;
  for (let index = 1; index < countArray.length; index++) {
    countArray[index] += countArray[index - 1];
    maximumCount = countArray[maximumCount] < countArray[index] ? index : maximumCount;
  }
  return maximumCount;
};
console.log(efficientApproach([1, 2, 5, 15], [5, 8, 7, 18]));
