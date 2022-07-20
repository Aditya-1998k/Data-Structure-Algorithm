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
for(let i=0; i<n; i++){
    let arr=readLine().split(" ");
    let even=[]
    let odd=[]
    for(let j=0; j<arr.length; j++){
        if(j%2===0){
            even.push(parseInt(arr[i]))
        }else{
            odd.push(parseInt(arr[i]))
        }
    }
    let evenSorted=[]
    let min=even[0]
    for(let j=0; j<even.length; j++){
        if(min>parseInt(even[i])){
            min=even[i]
        }
        evenSorted.push(min)
        let index=even.indexOf(min)
        even.splice(index,1)
    }
    let oddSorted=[]
    let max=odd[0]
    for(let j=0; j<even.length; j++){
        if(min>parseInt(even[i])){
            min=even[i]
        }
        evenSorted.push(min)
        let index=even.indexOf(min)
        even.splice(index,1)
    }
}