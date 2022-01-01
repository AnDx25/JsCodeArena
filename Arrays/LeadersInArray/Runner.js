import testCases from "./TestCases.js";
import efficientApproach from "./EfficientApproach.js";
import naiveApproach from "./NaiveApproach.js";

(
    function runner()
    {
        testCases.forEach((testCase,index)=>{
            console.log(`Leaders for ${testCase.value} are : ${efficientApproach(testCase.value)} `)
        })
    }
)()