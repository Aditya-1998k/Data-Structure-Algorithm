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
let k=parseInt(readLine())
let arr=readLine().split(" ")
let mymap=new Map();
for(let i=0; i<arr.length; i++){
    if(mymap.has(arr[i])==true){
        mymap.set(arr[i],mymap.get(arr[i])+1)
    }else{
        mymap.set(arr[i],1)
    }
}
let arr_final=[]
for(let key of mymap.keys()){
    if(mymap.get(key)>k){
        arr_final.push(key)
    }
}
arr_final.sort()
if(arr_final.length==0){
    console.log("no such names in this town!!!")
}else{
    for(let element of arr_final){
        console.log(element)
    }
}