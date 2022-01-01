import windowSlidingTechnique from "./EfficientApproach.js";
import naiveMaximumKConsecutiveSum from "./NaiveApproach.js";
import testCases from "../TestCases.js";

(function runner() {
  const passedTestCases = testCases.reduce((passedTestCasesCount, testCase) => {
    const actualOutput = windowSlidingTechnique(testCase.input1,testCase.input2)
    //naiveMaximumKConsecutiveSum(testCase.input1, testCase.input2);
    console.log(`Executing TestCase->${testCase.type}
                        Maximum sum for k consecutive elements for ->${testCase.input1}
                        Expected OutPut->${testCase.ouput}
                        Actual Output->${actualOutput}
            `);
    if (actualOutput === testCase.ouput) {
      return (passedTestCasesCount += 1);
    }
  },0);
  const totalTestCases = testCases.length;
  const failedTestCases = totalTestCases - passedTestCases;
  console.log(`
                    Total Test Cases= ${totalTestCases},
                    Passed Test Cases= ${passedTestCases},
                    Failed Test Cases= ${failedTestCases}
            `);
})();
