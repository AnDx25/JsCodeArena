export const recursiveBinarySearch=(
    arr=[],
    first=0,
    last=arr.length-1,
    element
)=>{
    if(first>last)
    {
        return -1;
    }
    let middle=parseInt((first+last)/2);
    if(arr[middle]===element)
    {
        return middle
    }
    else if(arr[middle]>element)
    {
        return recursiveBinarySearch(
            arr,
            first,
            middle-1,
            element
        );
    }
    else if(arr[middle]<element)
    {
        return recursiveBinarySearch(
            arr,
            middle+1,
            last,
            element
        );
    }
}