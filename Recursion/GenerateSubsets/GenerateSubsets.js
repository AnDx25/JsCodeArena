const generateSubsets = (inputString = "", iterator = 0, resultString = "") => {
  if (iterator === inputString.length) {
    console.log(`${resultString}`);
    return;
  }
  generateSubsets(inputString, iterator + 1, resultString);
  generateSubsets(inputString, iterator + 1, resultString + inputString.charAt(iterator));
};

export default generateSubsets;
