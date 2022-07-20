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
let num=parseInt(readLine())
let girl=[]
let boy=[]
for(let i=0; i<num; i++){
    let arr=readLine().split(" ")
    if(parseInt(arr[0])===0){
        girl.push(parseInt(arr[1]))
    }else{
        boy.push(parseInt(arr[1]))
    }
}

girl.sort(function(a,b){return b-a})
boy.sort(function(a,b){return b-a})
girl.concat(boy)
console.log(...girl)