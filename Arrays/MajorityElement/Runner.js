import majorityElementTestCase from "./TestCases.js";
import mooreVotingAlgo from "./EfficientApproach.js";

(function runner() {
  const passedTestCases = majorityElementTestCase.reduce((passedTestCasesCount = 0, testCase) => {
    const actualOutput = mooreVotingAlgo(testCase.input);
    console.log(`
                Executing ${testCase.type}->
                Majority Element for ${testCase.input}->
                Expected Output ${testCase.output}->
                Actual Output ${actualOutput}
            `);

    return actualOutput === testCase.output ? passedTestCasesCount + 1 : passedTestCasesCount;
  }, 0);
  const totalTestCases = majorityElementTestCase.length;
  const failedTestCases = totalTestCases - passedTestCases;
  console.log(`
            Total TestCases = ${totalTestCases},
            Passed TestCases = ${passedTestCases},
            Failed TestCases = ${failedTestCases}
        `);
})();
