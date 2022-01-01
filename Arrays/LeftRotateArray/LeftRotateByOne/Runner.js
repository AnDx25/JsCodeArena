import naiveLeftRotateByOne from "./NaiveApproach.js";
import testCases from "../TestCases.js";
(
    function runner(){
        testCases.forEach((testCase,index)=>{
            console.log(`Output for ${testCase.testCaseType} with value ${testCase.value} is : ${naiveLeftRotateByOne(testCase.value)}`)
        })
   }
)()