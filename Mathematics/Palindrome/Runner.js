//import isPalindrome from "./Iterative.js";
import { isPalindrome } from "./Recursive.js";
import { testCases } from "./TestCase.js";
(function runner() {
  const passedTestCases = testCases.reduce((testCaseCount, testCase) => {
    //Iterative
    // const actualResult = isPalindrome(testCase.value);
    //Recursive
    const actualResult = isPalindrome(testCase.value);
    console.log(`Executing->${testCase.testCaseType}
                    Number ${testCase.value}
                    isPallindrome ${actualResult}`);
    testCaseCount = actualResult === testCase.output ? (testCaseCount += 1) : testCaseCount;
    return testCaseCount;
  }, 0);
  console.log(`Result-------------------------
               TotalTestCases=${testCases.length}
               PassedtestCases=${passedTestCases}
               FailedTestCases=${testCases.length - passedTestCases}
  `);
})();
