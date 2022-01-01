const swap=(arr=[],innerIt,outerIt)=>{
    let temp=arr[innerIt];
    arr[innerIt]=arr[outerIt];
    arr[outerIt]=temp;
}

export default swap