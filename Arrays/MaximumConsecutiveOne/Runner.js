import maximumConsecutiveOneTestCases from "./TestCases.js";
import maximumConsecutiveOne from "./EfficientApproach.js";
(function runner() {
  const passedTestCases = maximumConsecutiveOneTestCases.reduce((passedTestCases, testCase) => {
    // let actualOutput = naiveTrapWaterSolution(testCase.input);
    let actualOutput = maximumConsecutiveOne(testCase.input);
    console.log(`Executing ${testCase.type}->
                  Maximum Consecutive one for binary array ${testCase.input}->
                  Expected : ${testCase.output}
                  Actual : ${actualOutput}
                  `);
    if (testCase.output === actualOutput) {
      return passedTestCases + 1;
    }
  }, 0);
  const failedTestCases = maximumConsecutiveOneTestCases.length - passedTestCases;
  console.log(
    `Result
                  -------------------------------------
                  Total Test Cases  : ${maximumConsecutiveOneTestCases.length} 
                  Passed Test Cases : ${passedTestCases} 
                  Failed Test Cases : ${failedTestCases}`
  );
})();
