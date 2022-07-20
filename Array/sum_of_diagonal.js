let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from
// the input  and is stored in string format
let num=parseInt(readLine())
let arr=[]
for(let i=0; i<num; i++){
    arr.push(readLine().split(" "))
}
console.log(arr)
let sum=0
for(let i=0; i<num; i++){
    sum=sum+parseInt(arr[i][i])+parseInt(arr[i][num-i-1])
}
console.log(sum)