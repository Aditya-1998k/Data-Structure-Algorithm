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
let a=parseInt(readLine());
let b=parseInt(readLine());
if(a>0 && b>0){
    let perimeter=2*(a+b);
    console.log(perimeter);
}else
{
    console.log(0)
}