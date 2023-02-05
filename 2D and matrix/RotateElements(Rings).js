// Rotate Elements

//--------------Description-----------------------

// Given a n by n matrix. You have to rotate the elements of each ring of the matrix in the clockwise direction one place.

// -------------Output------------------
// You have to display the rotated matrix


// Consider this matrix in the form of two rings and rotate the ring by one place in the clockwise direction

//  1  2  3  4                                       5  1  2  3 
//  5  6  7  8                 --------->            9  10 6  4
//  9  10 11 12                                      13 11 7  8
//  13 14 15 16                                      14 15 16 12


//=================================Implementation/Algo============================================
let mat=input  //input matrix

let top=0, left=0, right=n; bottom=n;
	let a=1, b=0;
	
	while(top<bottom-1)
	{ 
    let initial=mat[a][b];
    a++;
	b++;
	
        	        function swap(i,j)
                    {
                        let temp=mat[i][j];
                        mat[i][j]=initial;
                        initial=temp
                    }
    	
    	for(let i=left; i<right; i++)
    	{
    	    swap(top,i)
    	}
    	top++;
    	
    	for(let i=top; i<bottom; i++)
    	{
    	    swap(i,right-1)
    	}
    	right--;
    	
    	for(let i=right-1; i>=left; i--)
    	{
    	    swap(bottom-1,i)
    	}
    	bottom--;
    	
    	for(let i=bottom-1; i>=top; i--)
    	{
    	    swap(i,left)
    	}
    	left++;
	}

    for(let ar of mat)
    {
        console.log(ar.join(" "))
    }