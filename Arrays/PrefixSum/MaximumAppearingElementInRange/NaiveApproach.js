const naiveApproach = (startRangeEl = [], endRangeEl = []) => {
  const lengthOfRangeArray = startRangeEl.length;
  let rangeElementCount = new Array(1000).fill(0);
  for (let index = 0; index < lengthOfRangeArray; index++) {
    for (let rangeIndex = startRangeEl[index]; rangeIndex <= endRangeEl[index]; rangeIndex++) {
      rangeElementCount[rangeIndex] += 1;
    }
  }

  //Finding Maximum frequency
  let maxCountIndex = 0;
  for (let index = 0; index < rangeElementCount.length; index++) {
    if (rangeElementCount[index] > rangeElementCount[maxCountIndex]) {
      maxCountIndex = index;
    }
  }
  return maxCountIndex;
};
console.log(naiveApproach([1, 2, 5, 15], [5, 8, 7, 18]));
