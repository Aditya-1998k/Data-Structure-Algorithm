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
let mymap=new Map();
let arr=[]
for(let i=0; i<num; i++){
    let [key,value]=readLine().split(" ");
    mymap.set(parseInt(key),parseInt(value))
    arr.push(parseInt(key))
}
let sorted=arr.sort((a,b)=>{return a-b})
let overtake=0;
for(let i=0; i<sorted.length-1; i++){
    let checker=sorted[i];
    for(let j=i+1; j<sorted.length; j++){
        if(mymap.get(checker)> mymap.get(j)){
            overtake++
        }
    }
}
console.log(overtake)