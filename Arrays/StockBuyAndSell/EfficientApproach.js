const sbsEfficientApproach = (stockPrices = [], start = 0, end = 0) => {
  let profit = 0;
  for (let iterator = 1; iterator <= end; iterator++) {
    if (stockPrices[iterator] > stockPrices[iterator - 1]) {
      profit += stockPrices[iterator] - stockPrices[iterator - 1];
    }
  }
  return profit;
};
export default sbsEfficientApproach;
