import maxValue from "../../Utils/Max.js";
import minValue from "../../Utils/Min.js";
const efficientApproach=(arr=[])=>{
    let maxDiff=arr[1]-arr[0];
    let minEl=arr[0];
    for(let i=1;i<arr.length;i++)
    {
        maxDiff=maxValue(maxDiff,arr[i]-minEl);
        minEl=minValue(minEl,arr[i]);
    }
    return maxDiff
}

export default efficientApproach