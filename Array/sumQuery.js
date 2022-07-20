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
let n=parseInt(nums[0])
let query=parseInt(nums[1])
let arr=readLine().split(" ")
let sum=[]
sumofelement=0;
for(let i=0; i<n; i++){
  sumofelement=sumofelement+parseInt(arr[i]);
  sum.push(sumofelement)
}
for(let i=0; i<query; i++){
  let index=readLine().split(" ")
  let start=parseInt(index[0])
  let end=parseInt(index[1])
  if(start===0){
    console.log(sum[end])
  }else{
  console.log(sum[end]-sum[start-1])
  }
}


