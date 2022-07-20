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
if(num>=1 && num<=10**9){
    if(num%2===0){
        console.log(num)
    } else if(num%2!=0){
        let p=2*num;
        console.log(p);
    }
}
else{
    console.log("invalid input")
}