/**
 * 
 * Using Two Pointer Approach
 * swapping the startPoint element with endpoint
 * incrementing startPoint by 1 and decrememting endpoint by 1
 * 
 * TC: theta(n/2)
 * SC: theta(1)
 */
const reverseArray=(arr=[])=>{
    let startPoint=0;
    let endPoint=arr.length-1;
    while(startPoint<endPoint)
    {
        swap(arr,startPoint,endPoint);
        startPoint+=1;
        endPoint-=1;
    }
    return arr;
}
const swap=(arr,startPoint,endPoint)=>{
    let temp=arr[endPoint];
    arr[endPoint]=arr[startPoint];
    arr[startPoint]=temp;
}

const runnerFunction=()=>{
    console.log(`Reverse of array ${[10,5,7,30]} is : ${reverseArray([10,5,7,30])}`);
    console.log(`Reverse of array ${[30,20,5]} is : ${reverseArray([30,20,5])}`)

    
}

runnerFunction()