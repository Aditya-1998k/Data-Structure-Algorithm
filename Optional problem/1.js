let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let n=parseInt(readLine())
let arr=[]
for(let i=0; i<n; i++){
	arr.push(parseInt(readLine()))
}
arr.sort(a,b){
    return
}





























// for(let i=0; i<arr.length; i++){
// 	let count=0;
// 	for(let j=0; j<arr.length;j++){
// 		if(arr[i]<arr[j]){
// 			count++
// 		}
// 	}
// 	if(count===arr[i]){
// 		console.log(1)
// 		break
// 	}
// 	if(i===arr.length-1){
// 		if(count!=arr[i]){
// 			console.log(-1)
// 		}
// 	}
// }

