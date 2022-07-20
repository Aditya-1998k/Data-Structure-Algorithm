let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function shuffle(arr){
    //Implement this function
    let arr1=[]
    let arr2=[]
    for(let i=0; i<(arr.length)/2; i++){
      arr1.push(arr[i])
         
        }
    for(let i=arr.length/2; i<arr.length; i++){
          arr2.push(arr[i])
        }
    let arr3=[]
   for(let i=0; i<arr.length/2;i++){
      arr3.push(arr1[i])
      arr3.push(arr2[i])
   }
   return arr3
      }
  

// Do not edit anything below
let n = parseInt(readLine());
let nums = [];
for(let index=0;index<2*n;index++){
        nums.push(parseInt(readLine()));
}
let res=shuffle(nums);
for(elem of res){
  console.log(elem);
}