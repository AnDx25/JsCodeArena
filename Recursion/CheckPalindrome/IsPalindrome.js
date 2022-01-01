const isPalindrome = (input = "", iterartor = 0, result = false) => {
  if (input.length == 0 || (iterartor == parseInt(input.length / 2) && result)) {
    return true;
  }
  if (
    iterartor < input.length / 2 &&
    input.charAt(iterartor) === input.charAt(input.length - 1 - iterartor)
  ) {
    result = true;
    return isPalindrome(input, iterartor + 1, result);
  }
  return false;
};

export default isPalindrome;
