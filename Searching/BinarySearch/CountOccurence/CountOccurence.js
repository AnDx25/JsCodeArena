import { firstOccurAtIterative } from "../IndexOfFirstOccurence/Iterative.js";
import { lastOccurAt } from "../IndexOfLastOccurence/LastOccurAt.js";
export const countOccurence = (arr = [], element) => {
  const low = 0;
  const high = arr.length - 1;
  const firstOccur = firstOccurAtIterative(arr, low, high, element);
  if (firstOccur === -1) {
    return 0;
  }
  const lastOccur = lastOccurAt(arr, low, high, element);
  return lastOccur - firstOccur + 1;
};
