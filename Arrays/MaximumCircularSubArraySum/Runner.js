import efficientMaximumCircularSubArraySum from "./EfficientApproach.js";
import naiveMaximumCircularSubArraySum from "./NaiveApproach.js";
import circularSubArraySum from "./TestCases.js";
(function runner() {
  const passedTestCases = circularSubArraySum.reduce((count = 0, testCase) => {
    //const actualOutput = naiveMaximumCircularSubArraySum(testCase.input);
    const actualOutput = efficientMaximumCircularSubArraySum(testCase.input);
    console.log(`
            Executing ${testCase.type}->
            Maximum Circular SubArray Sum for ${testCase.input}->
            Expected Output ${testCase.output}->
            Actual Output ${actualOutput}
            `);
    return actualOutput === testCase.output ? count + 1 : count;
  }, 0);

  const totalTestCases = circularSubArraySum.length;
  const failedTestCases = totalTestCases - passedTestCases;
  console.log(`
            Total Test Cases-> ${totalTestCases}
            Test Cases Passed-> ${passedTestCases}
            Test Cases failed-> ${failedTestCases}
        `);
})();
