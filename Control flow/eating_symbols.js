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
let arr=readLine().split('+-');
let sum=0;
for(let i=0; i<=arr.length-1; i++){
    if(arr[i]==="+"){
        sum=sum+1;
    }else if(arr[i]==="-"){
        sum=sum-1;
    }
}
console.log(sum);

