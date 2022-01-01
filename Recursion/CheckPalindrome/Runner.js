import isPalindrome from "./IsPalindrome.js";
import testCases from "./TestCases.js";
(function runner() {
  testCases.forEach((testCase, index) => {
    console.log(
      `Executing ${testCase.testCaseType}-> String ${
        testCase.value.length > 0 ? testCase.value : "EMPTY"
      } palindrome check : ${isPalindrome(testCase.value, 0, false)}`
    );
  });
})();
