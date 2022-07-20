let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let n=parseInt(readLine());
let arr=[]
for(let i=0; i<n; i++){
    let num=parseInt(readLine())
    arr.push(num)
}


arr.sort(function(a,b){return (a-b)}) //while sorting numbers array please use it
let p=arr[0]
let q=arr[arr.length-1]
console.log(p*q)
console.log(arr)