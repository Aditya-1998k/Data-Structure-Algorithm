let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function intersect(arr1, arr2){
  // implement this function
  let index1=0;
  let index2=0;
  let intersection=[];
//   while(index1<arr1.length && index2<arr2.length){
//     if(arr1[index1]===arr2[index2]){
//         intersection.push(arr1[index1]);
//         index1++;
//         index2++;
//     }else if(arr1[index1]<arr2[index2]){
//         index1++
//     }else{
//         index2++
//     }
//   }
  if(intersection.length===0){
    intersection.push(-1);
    return intersection;
  }
  else{
    return intersection;
  }
  
}


// DO NOT change anything below this line
let lenOfArr1 = parseInt(readLine());
let arr1 = [];
for(let index=0;index<lenOfArr1;index++){
  arr1.push(parseInt(readLine()));
}
let lenOfArr2 = parseInt(readLine());
let arr2 = [];
for(let index=0;index< lenOfArr2;index++){
  arr2.push(parseInt(readLine()));
}

let intersectionOfArrays=intersect(arr1,arr2);
for(let index=0;index<intersectionOfArrays.length;index++){
  console.log(intersectionOfArrays[index]);
}