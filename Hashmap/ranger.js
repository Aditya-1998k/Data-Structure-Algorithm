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
let t=parseInt(readLine());
for(let i=0; i<t; i++){
    let n=parseInt(readLine())
	let nums=readLine().split(" ");
    //console.log(nums)
	let right=[];
	let product=1;
	for(let j=0; j<n; j++){
		right[j]=product;
        //console.log(right)
		product=product*parseInt(nums[j]);
	}
	let left=[];
	product=1;
	for(let j=nums.length-1; j>=0; j--){
		left[j]=product;
		product=product*parseInt(nums[j]);
	}
	let result=[]
	for(let j=0; j<right.length; j++){
		result[j]=left[j]*right[j]
	}
	console.log(...result)
}