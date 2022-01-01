import maximumSumSubArrayTestCases from "./TestCases.js";
import naiveMaximumSumSubArray from "./NaiveApproach.js";
import efficientMaximumSumSubArray from "./EfficientApproach.js";

(function runner() {
  const passedTestCases = maximumSumSubArrayTestCases.reduce((passedTestCases, testCase) => {
    // let actualOutput = naiveTrapWaterSolution(testCase.input);
    let actualOutput = efficientMaximumSumSubArray(testCase.input);
    console.log(`Executing ${testCase.type}->
                          Maximum sum in subarray in this array ${testCase.input}->
                          Expected : ${testCase.output}
                          Actual : ${actualOutput}
                          `);
    if (testCase.output === actualOutput) {
      return passedTestCases + 1;
    }
  }, 0);
  const failedTestCases = maximumSumSubArrayTestCases.length - passedTestCases;
  console.log(
    `Result
                          -------------------------------------
                          Total Test Cases  : ${maximumSumSubArrayTestCases.length} 
                          Passed Test Cases : ${passedTestCases} 
                          Failed Test Cases : ${failedTestCases}`
  );
})();
