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
let n=parseInt(readLine())
let arr=readLine().split(" ")

let sum=0;
for(let j=0; j<n; j++){
    if(j%2===0){
        sum=sum+parseInt(arr[j])
    }else{
      continue
    }
}
console.log(sum)
