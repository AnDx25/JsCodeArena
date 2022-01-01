import evenOddSubArrayTestCases from "./TestCases.js";
import efficientApproach from "./EfficientApproach.js";
(function runner() {
  const passedTestCases = evenOddSubArrayTestCases.reduce((passedTestCaseCounter, testCase) => {
    let actualOutput = efficientApproach(testCase.input);
    console.log(`
            Executing ${testCase.type}->
            Maximum Even Odd Length Subarray for input ${testCase.input}->
            Expected Output ${testCase.output}
            Actual Output ${actualOutput}
            `);
    if (testCase.output === actualOutput) {
      return passedTestCaseCounter + 1;
    }
  }, 0);
  let failedTestCases = evenOddSubArrayTestCases.length - passedTestCases;
  console.log(
    `Result
                          -------------------------------------
                          Total Test Cases  : ${evenOddSubArrayTestCases.length} 
                          Passed Test Cases : ${passedTestCases} 
                          Failed Test Cases : ${failedTestCases}`
  );
})();
