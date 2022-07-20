var searchInsert = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        if(parseInt(nums[i])===target){
            return i
        }else if(target< parseInt(nums[i]) &&target>parseInt(nums[i-1])){
                return i
        }else if(target>parseInt(nums[nums.length-1])){
            return nums.length
        }else if(nums[0]>target){
            return 0;
        }
    }
};
let p=[1,3,5,6]
console.log(searchInsert(p,0))