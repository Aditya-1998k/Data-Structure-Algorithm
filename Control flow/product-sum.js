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
let product=1;
let sum=0;
if (num===0)
{
    console.log(parseInt("0"))
}  
else if(num!=0){
    while(num!=0){
        let m=num%10;     //remainder store in m which is last digit
                         //except last digit other remains
        product=product*m;
        sum=sum+m;
        num=parseInt(num/10); //return integer of quotient
}
let result=product-sum;
console.log(result)}


