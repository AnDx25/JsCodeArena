const checkSorted=(arr=[])=>{
    //Assuming by default array is sorted
    let result=true;
    arr.forEach((value,index)=>{
        if(index<arr.length-1)
        {
            if(arr[index]>arr[index+1])
            {
                //if found any out of order element
                result=false;
            }
        }
    })

    return result
}

const runnerFunction=()=>{
    let testCases=[
        {
            testCaseType:"negativeTestCase1",
            value:[7,20,30,10]
        },
        {
            testCaseType:"positiveTestCase1",
            value:[10,20,30,40]
        },
        {
            testCaseType:"positiveTestCase2",
            value:[100]
        },
        {
            testCaseType:"positiveTestCase3",
            value:[]
        },
    ];

    console.log("Running TestCases-------------------");
    console.log(`-------------------------------------------------------------------------------------`)
    testCases.forEach((value,index)=>{
        if(value.testCaseType.includes('positive'))
        {
            console.log(`Expected Result for TestCase ${index+1} of type ${value.testCaseType} with value ${value.value} is true`)
        }
        else if(value.testCaseType.includes('negative'))
        {
            console.log(`Expected Result for TestCase ${index+1} of type ${value.testCaseType} with value ${value.value} is false`)
        }
        console.log(`Actual Result for TestCase ${index+1} of type ${value.testCaseType} with value ${value.value} is ${checkSorted(value.value)}`)
        console.log(`---------------------------------------------------------------------------------------`)
    })

}

runnerFunction();