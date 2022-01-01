import sumDigits from "./SumDigit.js";
import testCases from "./TestCases.js";

(function runner() {
  testCases.forEach((testCase, index) => {
    console.log(
      `Executing ${testCase.type}->Sum Of Digits For Number ${testCase.value} is ${sumDigits(
        testCase.value
      )}`
    );
  });
})();
