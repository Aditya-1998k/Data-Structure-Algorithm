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

//taking input using readline function and split function so space seperated string be splitted
let arr=readLine().split(" ");
let a=parseInt(arr[0]);
let b=parseInt(arr[1]);
let  len= arr. length;
console.log(len)

//now using conditionals to get desired output
// a<=1 and b<=3
if (a<=3 && b>=1){
    if(a>=1 && b<=3){
        let p=a*b;
//if number is odd then only we able to produce odd by multiplying abc 
// in case of even any num it produce even
//so need to take c and just check number ab is odd or even
        if(p%2===1){
            console.log("Yes");
     } else {
            console.log("No")
        }
    } else{
    console.log("invalid input")
}
}else {
    console.log("invalid input")
}