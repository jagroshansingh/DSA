
let ar=[2,5,6,7,9,22,45,76]

let find=6;

let l=0,r=ar.length-1;

const lookOut=()=>{

    while(l<=r)
    {
        let mid=Math.floor(l+(r-l)/2)

        if(ar[mid]==find) return mid
        else if(find<ar[mid]) r=mid-1;
        else if(find>ar[mid]) l=mid+1

    }
    return 'not found'
}

let res= lookOut()
console.log(res)