const naiveApproach=(arr=[])=>{
    let isLeader=true;
    for(let outer=0;outer<arr.length;outer++)
    {
        for(let inner=outer+1;inner<arr.length;inner++)
        {
            if(arr[outer]<=arr[inner])
            {
                isLeader=false;
            }
        }
        isLeader?console.log(arr[outer]+" "):"";
    }
}

export default naiveApproach