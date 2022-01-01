import efficientApproach from "./EffiicientApproach.js";
import testCases from "./TestCases.js";
(function runner() {
  testCases.forEach((testCase) => {
    console.log(`Executing ${testCase.type}->`);
    console.log(efficientApproach(testCase.value));
  });
})();
