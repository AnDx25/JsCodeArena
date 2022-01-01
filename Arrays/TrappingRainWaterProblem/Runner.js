import trapWaterTestCases from "./TestCases.js";
import naiveTrapWaterSolution from "./NaiveApproach.js";
import efficientTrapWaterSolution from "./EfficientApproach.js";
(function runner() {
  const passedTestCases = trapWaterTestCases.reduce((passedTestCases, testCase) => {
    // let actualOutput = naiveTrapWaterSolution(testCase.input);
    let actualOutput = efficientTrapWaterSolution(testCase.input);
    console.log(`Executing ${testCase.type}->
                Maximum Water contained for Following bars ${testCase.input}->
                Expected : ${testCase.output}
                Actual : ${actualOutput}
                `);
    if (testCase.output === actualOutput) {
      return passedTestCases + 1;
    }
  }, 0);
  const failedTestCases = trapWaterTestCases.length - passedTestCases;
  console.log(
    `Result
                -------------------------------------
                Total Test Cases  : ${trapWaterTestCases.length} 
                Passed Test Cases : ${passedTestCases} 
                Failed Test Cases : ${failedTestCases}`
  );
})();
