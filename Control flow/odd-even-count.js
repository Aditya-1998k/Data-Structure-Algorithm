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
let even=0;
let odd=0;
let i=1;
while(i<=n)
    {
    let num=parseInt(readLine());
    if(num%2===0){
        even++;
    }else{
        odd++;
    } i++
}
console.log(odd);
console.log(even)