import { firstOccurAtRecursive } from "./Recursive.js";
import { firstOccurAtIterative } from "./Iterative.js";
import { testCases } from "./TestCases.js";
(function runner() {
  const passedTestCaseCount = testCases.reduce((passedTestCases, testCase) => {
    /**Calculating actual output of current implementation */
    const actualOutput = firstOccurAtIterative(
      testCase.inputArray,
      0,
      testCase.inputArray.length - 1,
      testCase.element
    );
    console.log(`Executing ${testCase.type}${testCase.index}->
                    Searched Element ${testCase.element} occured first in ${testCase.inputArray}->
                    At Index->
                    Expected Output->${testCase.output}
                    Actual Output->${actualOutput}
        `);
    if (actualOutput === testCase.output) {
      return passedTestCases + 1;
    }
  }, 0);
  const totalTestCases = testCases.length;
  const failedTestCases = totalTestCases - passedTestCaseCount;
  console.log(`TOTAL TEST CASES= ${totalTestCases}
               PASSED TEST CASES= ${passedTestCaseCount}
               FAILED TEST CASES= ${failedTestCases}
    `);
})();
