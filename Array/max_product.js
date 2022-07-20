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
let num1=parseInt(readLine())
let num2=parseInt(readLine())
let arr1=readLine().split(" ")
let arr2=readLine().split(" ")


 let first_arr=arr1.map(k=>parseInt(Math.abs(k)))
 let second_arr=arr2.map(k=>parseInt(Math.abs(k)))
let max1=first_arr.reduce(maxFunction)
let max2=second_arr.reduce(maxFunction)
function maxFunction(a,b){
    if(a>b){
        return a
    }else{
        return b
    }
}
console.log(first_arr)
console.log(max1*max2)
