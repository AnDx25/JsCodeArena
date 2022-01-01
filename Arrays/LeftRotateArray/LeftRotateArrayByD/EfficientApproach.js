const efficientApproach=(arr=[],d=0)=>{
    let tempArray=[];
    let n=arr.length
    //copying the first d elements into temp array
    for(let i=0;i<d;i++)
    {
        tempArray.push(arr[i]);
    }
    //Shifting remaining elememts other than first d elements shifting each elements to the left of array by d positions
    for(let i=d;i<arr.length;i++)
    {
        arr[i-d]=arr[i];
    }
    //Copying back the temp array elements into original array but at the last of it
    for(let i=0;i<d;i++)
    {
        arr[n-d+i]=tempArray[i];
    }
    return arr;
}

export default efficientApproach