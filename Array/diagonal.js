let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// name your function as rightToLeftDiagonal
function rightToLeftDiagonal(arr){
    let arr5=[]
    if(arr.length===1){
        arr5.push(parseInt(arr[0]))
        return arr5
    }
    let arr2=[]
    for(let i=0; i<arr.length; i++){
        let p=arr[i]
        for(let j=0; j<arr.length; j++){
                arr2.push(p[j])
        }
    }
    m=arr.length
   // console.log(arr2)
    let arr4=[]
    for(let i=m-1; i<arr2.length-m+1; i=i+m-1){
        arr4.push(arr2[i])
        
    }
    return arr4;
}



// Do not change anything below this line
let m = parseInt(readLine());
let list = [];
for(let val=0;val<m;val++){
  let row=readLine().split(" ");
  list.push(row);
}
let res= rightToLeftDiagonal(list);
for(val of res){
  console.log(val);
}