let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

/* -------- Do NOT edit anything above this line ----------
Use readLine() for taking input, it will read one line of from the input  and is stored in string format
parseInt() is used to convert string into integer
parseFloat() is used to convert string into floating point datatype*/

let firstInt=parseInt(readLine())
let secondInt=parseInt(readLine())
let thirdInt=parseInt(readLine())
let ratio=secondInt/firstInt;
let a4=firstInt*((ratio)**3)
console.log(a4)

//console.log(thirdInt*ratio)

/*let fourthInt=firstInt*(ratio**3)
console.log(fourthInt)
console.log(10**3)
let a=parseFloat(readLine())
let b=parseFloat(readLine());
let c=parseFloat(readLine())
console.log(a+b**c);
console.log(a+b+c)*/
