var searchRange = function(nums, target) {
    let arr=[]
    for(let i=0; i<nums.length; i++){
            if(nums[i]==target){
                arr.push(i)
            }
    }
    if(arr.length==0){
        arr=[-1,-1]
        return arr
    }else if(arr.length==1){
        arr.push(arr[0])
    return arr
    }else{
        let min=arr[0]
        let max=arr[0]
        for(let i=0; i<arr.length;i++){
            if(min>arr[i]){
                min=arr[i]
            }
            if(max<arr[i]){
                max=arr[i]
            }  
        }
        let arr3=[min,max]
        return arr3

    }
};
let nums = [5,7,7,8,8,8]
let target =8
console.log(searchRange(nums, target))