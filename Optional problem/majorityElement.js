var majorityElement = function(nums) {
    for(let i=0; i<nums.length; i++){
        let p=nums[i]
        let count=0
        for(let j=0; j<nums.length; j++){
            if(p===nums[j]){
                count++
            }
        }
        if(count>(nums.length/2)){
            return p
        }
    }
};
let nums=[6,5,5]
console.log(majorityElement(nums))