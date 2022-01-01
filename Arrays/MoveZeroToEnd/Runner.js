import naiveZeroToEnd from './NaiveApproach.js'
import efficientZeroToEnd from './EfficientApproach.js'
import testCases from './testCases.js'
(
   function runner(){
        testCases.forEach((testCase,index)=>{
            console.log(`Output for ${testCase.testCaseType} with Naive Approach is : ${naiveZeroToEnd(testCase.value)}`)
            console.log(`Output for ${testCase.testCaseType} with Efficient Approach is : ${efficientZeroToEnd(testCase.value)}`)         
        })
       
    }
)()