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
let query=parseInt(readLine());
for(let i=0; i<query; i++){
    let num=parseInt(readLine());
    let arr=readLine().split(" ");
    let sorted=arr.sort((a,b)=>{return a-b})
    let max=parseInt(sorted[num-1])
    let sum=0
    for(let i=0; i<num-1 ; i++){
      for(let j=i; j<num; j++){
        sum+=Math.abs(parseInt(arr[i])-parseInt(arr[j]))
      }
    }
    console.log(sum*max)
}