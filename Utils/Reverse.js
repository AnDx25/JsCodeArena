import swap from "./swap.js";
const reverse=(arr,low,high)=>{
    while(low<high)
    {
        swap(arr,low,high);
        low++;
        high--;
    }
}

export default reverse