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
let testcase=parseInt(readLine())
for(let i=0; i<testcase; i++){
    let n=parseInt(readLine())
    let arr=readLine().split(" ")
    let product=1;
    let product2=1
    let left=[product]
    let right=[product2]
    
    for(let j=0; j<n-1; j++){
        product=product*parseInt(arr[j])
        left.push(product)
    }
    for(let j=n-1; j>=1; j--){
        product2=product2*parseInt(arr[j])
        right.unshift(product2)
    }
    let final=[]
    for(let j=0; j<n; j++){
        final.push(right[j]*left[j])
    }
    console.log(...final)
}