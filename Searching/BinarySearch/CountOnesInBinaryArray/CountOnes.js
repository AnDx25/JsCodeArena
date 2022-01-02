import { firstOccurAtIterative } from "../IndexOfFirstOccurence/Iterative.js";
export const countOnes = (arr = []) => {
  const firstOccur = firstOccurAtIterative(arr, 0, arr.length, 1);
  if (firstOccur === -1) {
    return 0;
  }
  return arr.length - firstOccur;
};
