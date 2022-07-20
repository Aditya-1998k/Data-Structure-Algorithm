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
//take time array and sort it
//start adding higher value for no of queries
let [num, queries]=readLine().split(" ");
let time=readLine().split(" ");
let score=readLine().split(" ");
let time_sorted=merge_sort(time, 0, num-1)
//console.log(time_sorted)
let sum=0;
for(let i=num-1; i>=0; i--){
    time_sorted[i]=parseInt(time_sorted[i])+sum;
    sum=time_sorted[i];
}
//console.log(time_sorted)

for(let i=0; i<parseInt(queries); i++){
	let question=parseInt(readLine());
    let ans=time_sorted[num-question]
    console.log(ans)
}

//

function merge_sort(arr, start, end) {

    // An empty copy of the passed arr
    // our job is to fill this with elements in sorted order
    let sorted = new Array(end - start + 1);

    if (start == end) {
        sorted[0] = arr[start];
        return sorted;
    }

    // divide the arr in two parts
    let left_start = start;
    let left_end = start + Math.floor((end - start)/2);

    let right_start = left_end + 1;
    let right_end = end;
    
    // sort the left part
    let sorted_left = merge_sort(arr, left_start, left_end);
    
    // sort the right part
    let sorted_right = merge_sort(arr, right_start, right_end);

    // now we can merge the sorted parts
    // to sort the array from start through end
    let i = 0, j = 0, k = 0;

    while (i < sorted_left.length && j < sorted_right.length) {
        if (sorted_left[i] <= sorted_right[j]) {
            sorted[k] = sorted_left[i];
            i++;
        } else {
            sorted[k] = sorted_right[j];
            j++;
        }
        k++;
    }

    while (i < sorted_left.length) {
        sorted[k] = sorted_left[i];
        i++;
        k++;
    }

    while (j < sorted_right.length) {
        sorted[k] = sorted_right[j];
        j++;
        k++;
    }
    
    // console.log(start, end);
    // console.log("Sorted Left", sorted_left);
    // console.log("Sorted Right", sorted_right);
    // console.log("Sorted Merged", sorted);

    return sorted;
}