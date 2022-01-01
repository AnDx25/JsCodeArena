import maxValue from "../../Utils/Max.js";
const sbsNaiveApproach = (stockPrice = [], start, end) => {
  /**If less than equal to 1 stock price then return 0 Profit */
  if (end <= start) return 0;
  //Intializing Profit
  let totalProfit = 0;
  /**
   * Running two loops to select pair of prices such that coming day stock price more than current
   * For every pair summing up its respective profit along with previous days profit from current day and
   * further upcoming days profit from current upcoming day
   * Comparing totalProfit everytime with current time
   */
  for (let leftIterator = start; leftIterator < end; leftIterator++) {
    for (let rightIterator = leftIterator + 1; rightIterator <= end; rightIterator++) {
      if (stockPrice[rightIterator] > stockPrice[leftIterator]) {
        let currentProfit =
          stockPrice[rightIterator] -
          stockPrice[leftIterator] +
          sbsNaiveApproach(stockPrice, start, leftIterator - 1) +
          sbsNaiveApproach(stockPrice, rightIterator + 1, end);
        totalProfit = maxValue(totalProfit, currentProfit);
      }
    }
  }
  return totalProfit;
};
export default sbsNaiveApproach;
