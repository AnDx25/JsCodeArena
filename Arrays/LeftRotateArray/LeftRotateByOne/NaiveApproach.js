const naiveLeftRotateByOne=(arr=[])=>{
    let firstEl=arr[0];
    for(let index=1;index<arr.length;index++)
    {
        arr[index-1]=arr[index];
    }
    arr[arr.length-1]=firstEl;
    return arr;
}

export default naiveLeftRotateByOne