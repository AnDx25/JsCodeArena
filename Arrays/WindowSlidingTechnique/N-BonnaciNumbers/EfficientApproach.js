const efficientNBonacci=(n,m)=>{
    let fiboArray=Array(m).fill(0);
    fiboArray[n-1]=1;
    fiboArray[n]=1;
    for(let index=n+1;index<m;index++)
    {
        fiboArray[index]=2*fiboArray[index-1]-fiboArray[index-n-1];
    }
    return fiboArray;
}
console.log(efficientNBonacci(3,8));