let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function insertionSort(A, n){
  // write from here
  for(let i=0; i<n; i++){
      let temp=A[i];
      let j=i-1;
      while(j>=0 && A[j]>temp){
          A[j+1]=A[j]
          j--
      }
      A[j+1]=temp
  }
  return A
}


function Convert_to_number(list){
  for(let each in list){
    list[each]=Number(list[each])
  }
}


let len=parseInt(readLine())
for(let i=0;i<len;i++){
  let n = parseInt(readLine())
  let arr =readLine().split(" ")
  Convert_to_number(arr)
  console.log(...insertionSort(arr, n))
}