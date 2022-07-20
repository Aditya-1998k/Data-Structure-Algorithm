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
let revint=0; //initailizing revint from 0
while(num!=0)    //starting while loop with condition num not equal to zero
{
    remainder=num%10;     //give result as remainder like 123%10 returns 3
    revint=revint*10+remainder; //revint=revint*10+remainder=0*10+3=3
    num=parseInt(num/10); // result will of integer quotient of num/10
}
console.log(revint)
