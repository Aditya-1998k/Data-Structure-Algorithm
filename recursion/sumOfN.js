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
    if(n==0){
        return 0;
    }
    let sum=n+sumOfFirstN(n-1)
    console.log(n,sum)
   return sum;
}

let n = parseInt(readLine());
sumOfFirstN(n);