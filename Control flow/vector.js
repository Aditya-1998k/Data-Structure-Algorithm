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
//using readLine() function take input with space aand split fuction to seperate input with space in different string

let arr1=readLine().split(" ");
let arr2=readLine() .split(" ");
//using split function to spit the string have space
//and now assigning these string value in integer form to different variable
let a1=parseInt(arr1[0]);
let a2=parseInt(arr1[1]);
let a3=parseInt(arr1[2]);
let b1=parseInt(arr2[0]);
let b2=parseInt(arr2[1]);
let b3=parseInt(arr2[2]);

//writing formula

let p=a1*b1+a2*b2+a3*b3;
//if p is zero means both vectors are perpendicular
let m=a2*b3-a3*b2;
let n=a1*b3-b1*a3;
let r=a1*b2-a2*b1;
// modulas of a vector is add and squaere it all element
let q=m**2+n**2+r**2;
let s=q**(.5)
if(p===0){
    console.log(parseInt("2"))
} else if(s===0){
    console.log(parseInt("1"))
}else {
    console.log(parseInt("0"))
}
