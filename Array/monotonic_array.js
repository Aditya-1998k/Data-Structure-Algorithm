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
let num=parseInt(readLine());
let arr=[]
for(let i=0; i<num; i++){
    arr.push(parseInt(readLine()))
}
let count1=1
let count2=1; 
for(let i=0; i<arr.length-1; i++){
    if(arr[i]<=arr[i+1]){
        count1++
    }
    if(arr[i]>=arr[i+1]){
        count2++
    }
}
// console.log(count1)
// console.log(count2)
if(count1===num || count2===num){
    console.log(true)
}
else{
    console.log(false)
}