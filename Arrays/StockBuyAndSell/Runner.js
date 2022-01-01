import testCases from "./TestCases.js";
import sbsNaiveApproach from "./NaiveApproach.js";
import sbsEfficientApproach from "./EfficientApproach.js";
function runner() {
  const passedTestCases = testCases.reduce((passedTestCases, testCase) => {
    let actualOutput = sbsEfficientApproach(testCase.input, 0, testCase.input.length - 1);
    console.log(`Executing ${testCase.type}->
    Maximum Profit for Stocks ${testCase.input}->
    Expected : ${testCase.output}
    Actual : ${actualOutput}
    `);
    if (testCase.output === actualOutput) {
      return passedTestCases + 1;
    }
  }, 0);
  const failedTestCases = testCases.length - passedTestCases;
  console.log(
    `Result
    -------------------------------------
    Total Test Cases  : ${testCases.length} 
    Passed Test Cases : ${passedTestCases} 
    Failed Test Cases : ${failedTestCases}`
  );
}
runner();
