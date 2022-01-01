import efficientApproach from "./EfficientApproach.js";
import testCases from "./TestCases.js";
(
    function runner(){
        const passedTestCases = testCases.reduce((passedTestCasesCount, testCase) => {
            const actualOutput = efficientApproach(testCase.input1,testCase.input2)
            //naiveMaximumKConsecutiveSum(testCase.input1, testCase.input2);
            console.log(`Executing TestCase->${testCase.type}
                                Sum ${testCase.input2} is presesnt in ->${testCase.input1}
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
    }
)()