let fs = require("fs");
const { arrayBuffer } = require("node:stream/consumers");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
let num=parseInt(readLine())
let arr=[]
for(let i=0; i<num; i++){
    arr.push(readLine().split(" "))
}
let sum1=0
let sum2=0
for(let i=0; i<num; i++){
    sum1=sum1+parseInt(arr[i][i])
    sum2=sum2+parseInt(arr[i][num-i-1])
}
console.log(sum1+sum2)