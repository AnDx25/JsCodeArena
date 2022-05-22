import { efficientTrailingZero } from "./EfficientApproach.js";
import { testCases } from "./TestCases.js";
(function runner() {
  const passedTestCases = testCases.reduce((testCaseCount, testCase) => {
    const actualOutput = efficientTrailingZero(testCase.input);
    console.log(`Executing ${testCase.type}
                        Trailing Zero for factorial of ${testCase.input}
                        output: ${actualOutput}`);
    testCaseCount = actualOutput === testCase.output ? (testCaseCount += 1) : testCaseCount;
    return testCaseCount;
  }, 0);
  console.log(`Result---------------------------
            Total test case : ${testCases.length}
            Passed Test case : ${passedTestCases}
            Failed Test Case : ${testCases.length - passedTestCases}`);
})();
