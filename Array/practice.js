// let arr=[ 1, 2, 3, 4, 5, 6, "rama", "aditya", "honad" ]
// console.log(arr);
// for(let item of arr){   //iterating over the array
//     console.log(item
//         )
// }

// arr.push("jocky")  //adding element at the last of the array

// let deleted=arr.shift() //delete the first element and return that element
// console.log(deleted)

// let lastdeleted=arr.pop() //remove last element and return it
// console.log(lastdeleted)

// let length=arr.unshift("narendra modi ji") //add element at the begining and return length of arra
// console.log(length)
// console.log(arr) 

// let splicedeleted=arr.splice(0,1,"yogi ji", "modi ji")//splice take three argument first to start index from where to delete and second is no of count to be deleted and third is whatever you want to add
// console.log(splicedeleted)
// console.log(arr) 

// console.log(arr.indexOf("yogi ji"))//return index of first occurance of element and return -1 if not present
// console.log(arr.indexOf("jp nada"));
// arr.unshift("honad")
// console.log(arr.lastIndexOf("honad")) //search from the back and return its index

// console.log(arr.slice(0,3)) //return part of the array first argument is start index and 2nd argument is where to stop last element not taken into consideration


//finding max  element in the array
// let arr=[12,34,15,16,17,18,,35,97,53,62,78,44]
// let max=arr[0];
// for(let item of arr){
//     if(item>max){
//         max=item;
//     }
// }
// console.log(max)

// //array to string
// console.log(arr.join('')) //add all element of array into string 
 
// //converting string to array
// let str="aditya.gupta,village,barari2";

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
let arr=[];
for(let i=0; i<num; i++){
    arr.push(parseInt(readLine()))
}
for(let i=0; i<num; i++){
    arr[i]=arr[i]*arr[i];
}

//insertion sort class of algorithm
// for(let i=0; i<arr.length; i++){
//     let temp=arr[i];
//     let j=i-1;
//     while(j>=0 && arr[j]>temp){
//         arr[j+1]=arr[j];
//         j--
//     }
//     arr[j+1]=temp  //yaha j ki  value 1 se kam ho rahi hogi as expted se kyoki last me j-- hai 
// }
// console.log(arr)

//merge sort---->divide and conquire method division is recursive
// function merge_sort(arr, start, end){
//     let sorted=new Array(end-start+1);

//     //base case so that return out of function
//     if(start== end){
//         sorted[0]=arr[start];
//         return sorted;
//     }

//     //finding start and end index
//     let left_start=start;
//     let left_end=start+Math.floor((end-start)/2);
//     let rigth_start=left_end+1;
//     let right_end=end;

//     //sorting left and right part
//     let sorted_left = merge_sort(arr, left_start, left_end);
//     let right_sorted=merge_sort(arr, rigth_start, right_end);

//     //merging the array
//     let i=0; 
//     let j=0;
//     let k=0;
//     while (i < sorted_left.length && j < right_sorted.length){
//         if(sorted_left[i]<=right_sorted[j]){
//             sorted[k]=sorted_left[i]
//             i++;
//             k++;
//         }else{
//             sorted[k]=right_sorted[j];
//             j++;
//             k++;
//         }
//     }
//     while(i<sorted_left.length){
//         sorted[k]=sorted_left[i];
//         i++;
//         k++
//     }
//     while(j<right_sorted.length){
//             sorted[k]=right_sorted[j];
//             j++;
//             k++;
        
//     }
//     return sorted;
// }
// console.log(merge_sort(arr,0,arr.length-1))

//quick sort ---->divide and conquire
//[ 16, 1, 0, 9, 100 ]
let arr1=[16,1,0,9,100];
quicksort(arr1,0,arr1.length-1)
console.log(arr1)
function quicksort(arr, startIdx, endIdx){
    if(startIdx>=endIdx){
        return;
    }
    let pivotIdx=startIdx;
    let left_pointer=startIdx;
    let right_pointer=endIdx;
while(true){
    while(arr[left_pointer]<=arr[pivotIdx] && left_pointer<arr.length){
        left_pointer++
    }
    while(arr[right_pointer]>arr[pivotIdx]){
        right_pointer--;
    }
    if(left_pointer>right_pointer){
        let temp=arr[right_pointer];
        arr[right_pointer]=arr[pivotIdx];
        arr[pivotIdx]=temp;
        quicksort(arr,startIdx, right_pointer-1);
        quicksort(arr,right_pointer+1,endIdx);
        break;
    }else{
        let temp=arr[right_pointer];
        arr[right_pointer]=arr[left_pointer];
        arr[pivotIdx]=temp;
    }
}
}











