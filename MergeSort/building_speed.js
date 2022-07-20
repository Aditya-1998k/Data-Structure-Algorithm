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
let num=parseInt(readLine());
let arr=readLine().split(" ");
let sorted=arr.sort((a,b)=>{return a-b})
let speed=0;
for(let i=0; i<2*num-1; i=i+2){
	speed+=parseInt(sorted[i])
}
console.log(speed)