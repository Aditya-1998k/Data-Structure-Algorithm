let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// // -------- Do NOT edit anything above this line ----------
// // Use readLine() for taking input, it will read one line of from the input  and is stored in string format
// //taking input
// //taking array input using readline and split fxn
// //using for loop for each value
// //and second for loop for iterating over the array with differences
// //compare with minimum variable and check your ouput
let num=parseInt(readLine());
let unsorted_arr=readLine().split(" ");
//merge sort to sort the array to get linear time complexity
function merge_sort(arr, start, end){
    let sorted = new Array(end - start + 1);
    if(start==end){
        sorted[0]=arr[start];
        return sorted;
    }
    let left_start=start;
    let left_end=start+Math.floor((end-start)/2);
    let right_start=left_end+1;
    let right_end=end;

    let left_sorted=merge_sort(arr,left_start,left_end);
    let right_sorted=merge_sort(arr,right_start,right_end);

    let i=0; 
    let j=0;
    let k=0;
    while(i<left_sorted.length && j<right_sorted.length){
        if(left_sorted[i]<=right_sorted[j]){
            sorted[k]=left_sorted[i];
            i++;
            k++
        }else{
            sorted[k]=right_sorted[j];
            j++;
            k++;
        }
    }
    while(i<left_sorted.length){
        sorted[k]=left_sorted[i];
            i++;
            k++
    }
    while(j<right_sorted.length){
        sorted[k]=right_sorted[j];
            j++;
            k++;
    }
    return sorted
}
let arr=merge_sort(unsorted_arr,0,unsorted_arr.length-1)



//code for our problem
let min=+Infinity;
for(let i=0; i<num-1; i++){
    let diff=Math.abs(arr[i+1]-arr[i]);
    
    if(diff<min){
        min=diff;
    }
}
console.log(min)
