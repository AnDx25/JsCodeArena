import naiveLeftRotateByOne from "../LeftRotateByOne/NaiveApproach.js";
const naiveLeftRotateByD=(arr=[],d=0)=>{
    for(let i=1;i<=d;i++)
    {
        naiveLeftRotateByOne(arr);
    }
    return arr;
}

export default naiveLeftRotateByD