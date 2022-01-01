import swap from "../../../Utils/Swap.js"
import reverse from "../../../Utils/Reverse.js"
const veryEfficientApproach=(arr=[],d=0)=>{
    reverse(arr,0,d-1);
    reverse(arr,d,arr.length-1);
    reverse(arr,0,arr.length-1)
    return arr;
}

export default veryEfficientApproach
