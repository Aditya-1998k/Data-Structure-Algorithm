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
//take input as no of iteration

let n=parseInt(readLine());
for(let i=1; i<=n; i++)
{
    let p=parseInt(readLine());
    if(p>=3){
        console.log(parseInt("1"));
    }else if(p<3){
        console.log(parseInt("-1"));
    }
}