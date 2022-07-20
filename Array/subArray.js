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
let num=parseInt(readLine());
let arr=readLine().split(" ")
let count=0
let result=[parseInt(arr[0])]
let final=[]
for(let i=0; i<num; i++){
    if(parseInt(arr[i])<parseInt(arr[i+1]))
    {
        result.push(parseInt(arr[i+1]))
    }else{
        final.push(result)
        result=[parseInt(arr[i+1])]
        

    }
}
let arr_max=[]
for(let i=0; i<final.length; i++){
    arr_max.push(final[i].length)
}
let max=arr_max[0]
for(let i=0; i<arr_max.length; i++){
    if(max<arr_max[i]){
        max=arr_max[i]
    }
}

let p=arr_max.indexOf(max)


 let starting_index=0
let final_index=0
for(let i=0; i<arr_max.length;i++){
    if(i<p){
        starting_index=starting_index+arr_max[i]
    }
    if(i<=p){
        final_index=final_index+arr_max[i]
    }
    
}

let arr_result=[max, starting_index, final_index-1]
console.log(...arr_result)
