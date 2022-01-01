import swap from "./SwapFunction.js";
const naiveZeroToEnd=(arr=[])=>{
    for(let outerIt=0;outerIt<arr.length;outerIt++)
    {
        if(arr[outerIt]===0)
        {
            for(let innerIt=outerIt+1;innerIt<arr.length;innerIt++)
            {
                if(arr[innerIt]!==0)
                {
                    swap(arr,outerIt,innerIt);
                    break;
                }
            }
        }
    }
    return arr
}
export default naiveZeroToEnd