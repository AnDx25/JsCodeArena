import swap from "./swap.js";
export function reverseNumberRecursive(number, reverse = 0) {
  if (number === 0) {
    return reverse;
  }
  reverse = parseInt(reverse * 10 + (number % 10));
  return reverseNumberRecursive(parseInt(number / 10), reverse);
}
const reverse=(arr,low,high)=>{
    while(low<high)
    {
        swap(arr,low,high);
        low++;
        high--;
    }
}

export default reverse