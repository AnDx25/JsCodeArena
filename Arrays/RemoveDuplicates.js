/**
 * Problem Statement : Given a sorted array remove all the duplicates of elememts
 * and rrturn array with all unique element with size of array
 * I/P : arr[]=[10,20,20,30,30,30]
 * O/P : arr[]=[10,20,20], size=3
 * 
 * I/P : arr[]=[10,10,10]
 * O/P : arr[]=[10], size=1
 */
const testCases=[
    {
        testCaseType:"positiveTestCase1",
        value:[10,20,20,30,30,30]
    },
    {
        testCaseType:"positiveTestCase2",
        value:[10,10,10]
    },
    {
        testCaseType:"positiveTestCase2",
        value:[10,10,10]
    }

]
const removeDuplicates=(arr=[])=>{
    return arr.filter((value, index, arr) => value !== arr[index - 1]);
}

const runnerFunction=()=>{
    console.log("Running TestCases-------------------");
    console.log(`-------------------------------------------------------------------------------------`)
    testCases.forEach((value,index)=>{
        console.log(`Result for TestCase ${index+1} of type ${value.testCaseType} with value ${value.value} is ${removeDuplicates(value.value)}`)
        console.log(`---------------------------------------------------------------------------------------`)
    })

}
runnerFunction();