const efficientApproach=(arr=[])=>{
    let leader=arr[arr.length-1];
    console.log(leader+" ");
    for(let i=arr.length-2;i>=0;i--)
    {
        if(leader<arr[i])
        {
            leader=arr[i];
            console.log(leader+" ");
        }
    }

}

export default efficientApproach