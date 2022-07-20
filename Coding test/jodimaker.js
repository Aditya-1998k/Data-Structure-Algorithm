function merge_sort(arr, start, end) {

    // An empty copy of the passed arr
    // our job is to fill this with elements in sorted order
    let sorted = new Array(end - start + 1);

    if (start == end) {
        sorted[0] = arr[start];
        return sorted;
    }

    // divide the arr in two parts
    let left_start = start,
        left_end = start + Math.floor((end - start)/2);

    let right_start = left_end + 1,
        right_end = end;
    
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

let arr = [ 10, 1, 23, 50, 4, 9, -1];

let sorted = merge_sort(arr, 0, arr.length - 1)

console.log(sorted)