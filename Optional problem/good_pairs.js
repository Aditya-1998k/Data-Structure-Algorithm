let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ---------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

// let arr=readLine().split(" ")
// let count=0;
// for(let i=0; i<arr.length; i++){
//     var p=arr[i];
//     {
//         for(let j=i+1; j<arr.length; j++){
//             if(p===arr[j]){
//                 count++;
//             }else{continue}
//         }
//     }
    
    
// }
// console.log(count)
/**
 * @param {number[]} nums
 * @return {number}
 */

 


 function numIdenticalPairs(nums) {
    let count=0;
  for(let i=0; i<nums.length; i++){
    let p=parseInt(nums[i]);
    {
        for(let j=i+1; j<nums.length; j++){
            if(p===parseInt(nums[j])){
                count++;
            }else{continue}
        }
     }
    
}
     
     return count;
    }
 
 console.log(numIdenticalPairs([1,2,3,1,1,3]))


    

