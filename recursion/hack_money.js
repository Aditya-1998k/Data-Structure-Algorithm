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
function hack(i,target){
	if(i>target){
		return false
	}
	if(i==target){
		return true
	}
	
	let a=hack(i*10,target)
	let b=hack(i*20,target)

	if(a==true || b==true){
		return true
	}
	else{
		return false
	}
}

let n=parseInt(readLine())
for(let i=0; i<n; i++){
	let target=parseInt(readLine())
	let check=hack(1,target)
	if(check==true){
		console.log("Yes")
	}
	else{
		console.log("No")
	}
}
