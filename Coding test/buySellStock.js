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
let arr=[];
for(let i=0; i<n; i++){
    arr.push(parseInt(readLine()))
}
let i=0;
let j=1;
let maxprofit=0
while(j<n){
    if(arr[j]>arr[i]){
        let profit=arr[j]-arr[i];
        maxprofit=Math.max(maxprofit,profit)
    }else{
        i=j
    }
    j++
}
console.log(maxprofit)