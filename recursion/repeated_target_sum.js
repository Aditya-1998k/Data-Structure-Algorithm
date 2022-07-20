let fs = require("fs");
const { get } = require("http");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
function getTarget(arr,total_element,target,i){
	if(target==0){
		return 1;
	}
	if(target<0 || i==total_element){
		return 0;
	}
	return getTarget(arr,total_element, target-arr[i],i)+getTarget(arr,total_element,target, i+1)
}

let input=readLine().split(" ")
let total_element=parseInt(input[0])
let target=parseInt(input[1])
let arr=readLine().split(" ")
for(let i=0; i<total_element; i++){
	arr[i]=parseInt(arr[i])
}
console.log(getTarget(arr,total_element,target,0))