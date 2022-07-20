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
let arr=readLine().split(" ");
//use of split fucntion to seperate string with space
let num=parseInt(arr[0]); // assigning value in array arr to num
let fe=parseInt(arr[1]);   //assigning value in array arr to fe
//writing conditionals as given number boggies from front always be less than or 
//equal to total number of boggies in train
if(fe<=num && fe>=1){
  //bogies from back end is (total-no from back end +1)
let be=num-fe+1;
console.log(parseInt(be));
} else{
    console.log("invalid input")
}