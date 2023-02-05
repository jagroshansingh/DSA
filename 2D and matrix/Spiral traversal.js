// Spiral Traversal (Rectangular Matrix) Ended

// --------------Description-------------------

// You are given a matrix of size N x M.
// Print the spiral traversal of the matrix.

// --------------Output--------------------------
// For each test case, print the spiral traversal of the matrix, on a single line, on a new line.

// Sample Input
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12

// Sample Output
// 1 5 9 10 11 12 8 4 3 2 6 7


//===========================Impletation/Algo===============================
function spiralTraversal(N, M, arr){
    let br=[];
    let top=0,left=0,right=M-1,bottom=N-1;
    
    while(bottom>=top && right>=left)
    {
        //--------for top portion---------
        for(let i=top; i<=bottom; i++)
        {
            br.push(arr[i][left])
        }
        left++;
        if(left>right) break;
        
                //--------for left portion----------
                for(let i=left; i<=right; i++)
                {
                    br.push(arr[bottom][i])
                }
                bottom--;
                if(top>bottom) break;
        
        //-------for bottom portion------------
        for(let i=bottom; i>=top; i--)
        {
            br.push(arr[i][right])
        }
        right--;
        if(left>right) break;

                //--------for right portion---------
                for(let i=right; i>=left; i--)
                {
                    br.push(arr[top][i])
                }
                top++;
                if(top>bottom) break;
    }
    console.log(br.join(" "))
}