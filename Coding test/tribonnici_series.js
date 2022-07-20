let fs = require("fs");
const { isAbsolute } = require("path");
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
let sum=[0,1,1]
for(let i=3; i<=num; i++){
    sum[i]=sum[i-1]+sum[i-2]+sum[i-3]
}
if(num===0){
    console.log(0)
}
else if(num===1 || num===2){
    console.log(1)
}
else{
    console.log((sum[sum.length-1]).toLocaleString().replace(/,/g,''))    
}