import { iterativeBinarySearch } from "./IterativeSearch.js";
import { recursiveBinarySearch } from "./RecursiveBinarySearch.js";
import { testCases } from "./TestCases.js";
(
    function runner(){
        const passedTestCases=testCases.reduce((passedTestCases,testCase)=>{
            const actualOutput=recursiveBinarySearch(
                testCase.inputArray,
                0,
                testCase.inputArray.length-1,
                testCase.elementToSearch
            )
            // iterativeBinarySearch(
            //     testCase.inputArray,
            //     0,
            //     testCase.inputArray.length-1,
            //     testCase.elementToSearch);
            console.log(`EXECUTING TEST CASE OF TYPE ${testCase.type}->
                        INPUT ARRAY ${testCase.inputArray}->
                        ELEMENT TO FIND ${testCase.elementToSearch}->
                        EXPECTED INDEX OF ELEMENT ${testCase.output}->
                        ACTUAL INDEX OF ELEMENT ${actualOutput}
            `)
            if(testCase.output===actualOutput)
            {
                return passedTestCases+1;
            }
        },0)
        const totalTestCases=testCases.length;
        console.log(`TOTAL TEST CASES ${totalTestCases}->
                    PASSED TEST CASES ${passedTestCases}->
                    FAILED TEST CASES ${totalTestCases-passedTestCases}
        `)
    }
)()