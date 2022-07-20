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
let r=parseInt(readLine());
if(r<=1199){
    console.log("ABC")
}else if(r<2800 && r>=1200){
    console.log("ARC");
}else if(r>=2800) {
    console.log("AGC")
}