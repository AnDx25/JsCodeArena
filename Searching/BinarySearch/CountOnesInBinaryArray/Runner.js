import { testCases } from "./TestCases.js";
import { countOnes } from "./CountOnes.js";
(function runner() {
  const passedTestCases = testCases.reduce((passedTestCaseCount, testCase) => {
    const actualOutput = countOnes(testCase.inputArray);
    console.log(`
            Executing ${testCase.type}${testCase.index}->
            Number of ones in ${testCase.inputArray}->
            Expected ${testCase.output}
            Actual ${actualOutput}
            `);
    if (actualOutput === testCase.output) {
      return passedTestCaseCount + 1;
    }
  }, 0);
  const totalTestCases = testCases.length;
  const failedTestCases = totalTestCases - passedTestCases;
  console.log(`
    TOTAL TEST CASES=${totalTestCases}
    PASSED TEST CASES=${passedTestCases}
    FAILED TEST CASES=${failedTestCases}
    `);
})();
