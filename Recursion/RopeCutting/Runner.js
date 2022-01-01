import testCases from "./TestCases.js";
import maxPieces from "./MaxPieces.js";
(function runner() {
  testCases.forEach((testCase, index) => {
    console.log(`
                Executing ${testCase.type}->
                MaxPieces of Rope With Length ${testCase.ropeLength},
                with choices ${testCase.a},${testCase.b},${testCase.c}
                is ${maxPieces(testCase.ropeLength, testCase.a, testCase.b, testCase.c)}
            `);
  });
})();
