import naiveApproach from "./NaiveApproach.js";
import testCases from "./TestCases.js";
import efficientApproach from "./EfficientApproach.js";
(
    function runner(){
        let run=1;
        while(run>0)
        {
            testCases.forEach((testCase,index)=>{
                console.log(`Maximum Difference for ${testCase.value} By Naive Approach is : ${naiveApproach(testCase.value)}`)
            })

            testCases.forEach((testCase,index)=>{
                console.log(`Maximum Difference for ${testCase.value} By efficient Approach is : ${efficientApproach(testCase.value)}`)
            })

            run-=1;
        }
    }
)()