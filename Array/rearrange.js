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
let num=parseInt(readLine())
let nums=[]
let index=[]
for(let i=0; i<num; i++){
    nums.push(parseInt(readLine()))
}
for(let i=0; i<num; i++){
    index.push(parseInt(readLine()))
}

let arr=[]
for(let i=0; i<num; i++){
    arr.splice(index[i],0,nums[i])
}
//console.log(arr)
for(let element of arr){
    console.log(element)
}