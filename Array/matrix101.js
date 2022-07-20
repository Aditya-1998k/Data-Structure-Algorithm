let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let arrnum=readLine().split(" ")
let row=parseInt(arrnum[0])
let coloum=parseInt(arrnum[1])
let matrix=[]
for(let i=0; i<row; i++){
    matrix.push(readLine().split(" "))
}
let odd=[]
for(let i=0; i<row; i++){
    let arr=matrix[i]
    for(let j=0; j<coloum; j++){
        if(parseInt(arr[j])%2===1){
            odd.push(parseInt(arr[j]))
        }
    }
}
let sum=0
for(let i=0; i<odd.length; i++){
        sum=sum+odd[i]
}
console.log(sum)