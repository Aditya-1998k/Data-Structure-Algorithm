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
//using for loop so that we can itterate it as num of time it required
for(let i=1; i<=n; i=i+1){

    //using split function to seperate string having space in same line
let arr=readLine().split(" ")
let x=parseInt(arr[0]);  //assigning value in array arr to x
 let y=parseInt(arr[1]);  //assigning vlaue in array arr to y

 //logic for quadrant1(++) and Q2(-+) and Q3(--) and Q4(+-)
 if(x>0 && y>0){
    console.log("Q1");
}else if(x>0 && y<0){
    console.log("Q4")
} else if(x<0 && y>0){
    console.log("Q2");
}else if(x<0 && y<0){
    console.log("Q3")
}else {
    console.log("invalid input");
}
}
