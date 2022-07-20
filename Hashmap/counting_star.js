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
let n=parseInt(readLine())
for(let i=0; i<n; i++){
  let num=parseInt(readLine())
  let arr=readLine().split('');
  counting(num,arr)
}
function counting(num, arr){
  let myMap=new Map();
  let ans=[]
  for(let i=0; i<num; i++){
    if(myMap.has(arr[i])==false){
      myMap.set(arr[i],0)
      ans.push(myMap.get(arr[i]))
    }else{
      myMap.set(arr[i],myMap.get(arr[i])+1)
      ans.push(myMap.get(arr[i]))
    }
  }
  let sum=0
  for(let element of ans){
    sum=sum+parseInt(element)
  }
  console.log(sum)
}