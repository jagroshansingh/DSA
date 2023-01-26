//Make Leaderboard - Med

//------------------ Description---------------------

// You are given name and marks of N different students in a hackerrank contest. Your task is to write a program that makes leaderboard of the students under following conditions:

// Output N names with their rank. Follow these rules for generating the list:

// 1. The students having more mark gets better rank

// 2. If students have similar mark, their rank will be same(In case of similar marks, the person whose name comes first in alphabetical order comes first in order. However their rank will be same)

// ---------Sample Input-----------

// rancho 45
// chatur 32
// raju 30
// farhan 28
// virus 32
// joy 45

//--------Sample Output---------------
// 1 joy
// 1 rancho
// 3 chatur
// 3 virus
// 5 raju
// 6 farhan

//--------------- Constraints :

// 1 <= N <= 10^5

// 1 <= len(name) <= 10

//=============================================Code===============================================================

//--------------swap function--------------
function swap(a, b) {
  let temp = ar[a][0];
  ar[a][0] = ar[b][0];
  ar[b][0] = temp;
}

//-----------sorted the array as per decending scores---------------------
ar.sort((a, b) => b[1] - a[1]);
//console.log(ar)

//---------------arranged as per the lexographical way-----------------------------

for (let i = 0; i < ar.length; i++) {
  flag = false;
  for (let j = 0; j < ar.length - 1 - i; j++) {
    if (ar[j][1] == ar[j + 1][1] && ar[j][0] > ar[j + 1][0]) {
      swap(j, j + 1);
      flag = true;
    }
  }
  if (flag == false) break;
}
//console.log(ar)

//----------------arranged as per serial number----------------------------

let k = 1;
console.log(1 + " " + ar[0][0]);
for (let i = 1; i < ar.length; i++) {
  if (ar[i][1] == ar[i - 1][1]) {
    console.log(k + " " + ar[i][0]);
  } else {
    console.log(i + 1 + " " + ar[i][0]);
    k = i + 1;
  }
}
