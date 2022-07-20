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
let num=parseInt(readLine())
let arr=[]
for(let i=0; i<num; i++){
    arr.push(parseInt(readLine()))
}
let sum=arr[0];
for(let i=1; i<arr.length; i++){
    if(i%2===0){
        sum=sum-arr[i]
    }else{
        sum=sum+arr[i]
    }
}
console.log(sum)