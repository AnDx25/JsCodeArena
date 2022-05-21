function isPalindrome(num) {
  let reverse = 0;
  let numDup = num;
  while (numDup !== 0) {
    let temp = parseInt(numDup % 10);
    reverse = parseInt(reverse * 10 + temp);
    numDup = parseInt(numDup / 10);
  }
  return reverse === num;
}
export default isPalindrome;
