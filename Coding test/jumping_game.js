const { count } = require("console");
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
let arr=readLine().split(" ");
let arr2=[]
let counter=0;
let sum=0
for(let j=0; j<num; j++){
let counter1=j;

for(let i=j; i<num; i++){
     counter=counter+1;
     sum=sum+parseInt(arr[i])
      if(sum>=num){
         arr2.push(counter+counter1)
         counter=0;
         sum=j+1;
     }
     i=i+parseInt(arr[i])-1
    }
}
let min=Math.min(...arr2)
console.log(min)
