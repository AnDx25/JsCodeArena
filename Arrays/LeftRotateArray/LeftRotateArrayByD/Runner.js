import naiveLeftRotateByD from "./NaiveApproach.js";
import efficientApproach from "./EfficientApproach.js";
import veryEfficientApproach from "./VeryEfficientApproach.js";
import {testCasesForLeftRotateByD} from "../TestCases.js";
(
    function runner()
    {
        console.log(`RUNNING NAIVE APPROACH`)
        testCasesForLeftRotateByD.forEach((testCase,index)=>{
            console.log(`Left Rotation of ${testCase.arr} by ${testCase.d} is : ${naiveLeftRotateByD(testCase.arr,testCase.d)}`)
            
        })
        console.log(`RUNNING EFFICIENT APPROACH`)
        testCasesForLeftRotateByD.forEach((testCase,index)=>{
            console.log(`Left Rotation of ${testCase.arr} by ${testCase.d} is : ${efficientApproach(testCase.arr,testCase.d)}`)
            
        })

        console.log(`RUNNING VERY EFFICIENT APPROACH`)
        testCasesForLeftRotateByD.forEach((testCase,index)=>{
            console.log(`Left Rotation of ${testCase.arr} by ${testCase.d} is : ${veryEfficientApproach(testCase.arr,testCase.d)}`)
            
        })
    }
    
)()