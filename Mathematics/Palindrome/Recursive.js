import { reverseNumberRecursive } from "../../Utils/Reverse.js";

export const isPalindrome = (num) => {
  let dupNum = num;
  const reverseNum = reverseNumberRecursive(dupNum);
  return reverseNum === num;
};
