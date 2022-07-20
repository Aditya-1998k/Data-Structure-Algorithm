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
let numarr=readLine().split(" ")
let arr=readLine().split(" ")
let num=parseInt(numarr[0])
let k=parseInt(numarr[1])

let arr1=arr.map(k=>parseInt(k))
let p=arr1[k-1]
let q=arr1[num-k]
arr1[k-1]=q;
arr1[num-k]=p;
console.log(...arr1)