let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function sumOfFirstN(n){
	//Implement this function
    n=n+sumOfFirstN(n-1)
    return sumOfFirstN(n-1)
}

let n = parseInt(readLine());
sumOfFirstN(n);