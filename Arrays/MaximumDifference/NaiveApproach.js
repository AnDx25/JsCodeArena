import maxValue from "../../Utils/Max.js";
const naiveApproach=(arr=[])=>{
    let maxDiff=arr[1]-arr[0];
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            maxDiff=maxValue(arr[j],arr[i]);
        }
    }
    return maxDiff
}

export default naiveApproach;