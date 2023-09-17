

let ar=[1,2,2,3,4,5,4,4,3,2,1,1]

let filtered=ar.filter((el,i)=>ar.indexOf(el)==i)
console.log(filtered)

//-----or


ar.sort((a,b)=>a-b)
// console.log(ar)
for(let i=0; i<ar.length-1; i++)
  {
    if(ar[i]==ar[i+1])
    {
      ar.splice(i,1)
      i--;
    }
  }

console.log(ar)