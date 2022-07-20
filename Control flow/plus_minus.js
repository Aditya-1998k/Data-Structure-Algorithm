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
let n=parseInt(readLine());
let sum1=0;
let sum2=0;
for(let i=1; i<=n; i++){
    let num=parseInt(readLine());
    if(i%2===0){
        sum1=sum1+num;
    }else{
        sum2=sum2+num;
    }
}
let final=sum2-sum1;
console.log(final)