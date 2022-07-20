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
let nums=readLine().split(" ")
let arr=readLine().split(" ")
let n=parseInt(nums[0])
let target=parseInt(nums[1])
let count=0;
for(let i=0; i<n; i++){
    if(target===parseInt(arr[i])){
        count++
    }
}
console.log(count)