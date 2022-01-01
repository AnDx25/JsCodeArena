export const iterativeBinarySearch=(arr=[],first=0,last=arr.length-1,element)=>{

    console.log(`>>>INSIDE BINARY SEARCH>>>>`)
    while(first<=last)
    {
        let middle=parseInt((first+last)/2);
        if(arr[middle]===element)
        {
            return middle;
        }
        else if(arr[middle]>element)
        {
            last=middle-1;
        }
        else if(arr[middle]<element)
        {
            first=middle+1;
        }
    }
}