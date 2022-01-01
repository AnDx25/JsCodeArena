// const swap=require('./SwapFunction')
import swap  from "./SwapFunction.js";

const efficientZeroToEnd=(arr=[])=>{
    let count=0;
    arr.forEach((value,index)=>{
        if(value!=0)
        {
            swap(arr,index,count);
            count+=1;
        }
    })
    return arr
}

export default efficientZeroToEnd
