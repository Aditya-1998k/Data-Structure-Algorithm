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
let m=parseInt(readLine());
let n=parseInt(readLine());

for(let i=m; i<=n; i++){
    if(i<0){
        if(i<n){
            continue;
        }else {
            console.log("-1")
        }
    }else{
        console.log(i);
    }
}