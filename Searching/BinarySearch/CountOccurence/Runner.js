import { testCases } from "./TestCases.js";
import { countOccurence } from "./CountOccurence.js";
(function runner() {
  const passedTestCase = testCases.reduce((passedTestCaseCount, testCase) => {
    const actualOutput = countOccurence(testCase.inputArray, testCase.element);
    console.log(`Executing ${testCase.type}${testCase.index}->
            Searched Element ${testCase.element} in ${testCase.inputArray}->
            Is Founded these many times->
            Expected Output->${testCase.output}
            Actual Output->${actualOutput}
            `);
    if (actualOutput === testCase.output) {
      return passedTestCaseCount + 1;
    }
  }, 0);
  const totalTestCases = testCases.length;
  const failedTestCases = totalTestCases - passedTestCase;
  console.log(`TOTAL TEST CASES= ${totalTestCases}
                 PASSED TEST CASES= ${passedTestCase}
                 FAILED TEST CASES= ${failedTestCases}
      `);
})();
