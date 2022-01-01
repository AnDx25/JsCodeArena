const secondLargestElIndex=(arr)=>{
    let largest=0;
    let secondLargest=-1;
    for(let index=1;index<arr.length;index++)
    {
        if(arr[index]>arr[largest])
        {
            secondLargest=largest;
            largest=index;
        }
        else if(arr[index]!==arr[largest])
        {
            if(secondLargest===-1)
            {
                secondLargest=index;
            }
            else if(arr[index]>arr[secondLargest])
            {
                secondLargest=index;
            }
        }
    }
    return secondLargest
}
let arr=[22,1,0,92]
console.log(`Second Largest element in ${arr} is : ${arr[secondLargestElIndex(arr)]}`);