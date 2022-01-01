const naiveNBonacci = (n, m) => {
  //Here n is for N Bonacci
  //m stands for number of elements need to be produced
  let prevSum = 0;
  let fiboArray = [];
  for (let i = 0; i < n; i++) {
    fiboArray[i] = 0;
  }
  fiboArray[n - 1] = 1;
  for (let outerIndex = n; outerIndex < m; outerIndex++) {
      prevSum=0;
    for (let innerIndex = outerIndex - n; innerIndex < outerIndex; innerIndex++) {
      prevSum += fiboArray[innerIndex];
    }
    fiboArray[outerIndex] = prevSum;
  }
  return fiboArray;
};
console.log(naiveNBonacci(2,8));