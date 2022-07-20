var singleNumber = function(nums) {
    for(let i=0; i<nums.length; i++){
        let p=nums[i]
        let count=0
        for(let j=0; j<nums.length; j++){
                if(p===nums[j]){
                    count++
                }
        }if(count===1){
            return p
        }
    }
    
};
let nums=[4]
console.log(singleNumber(nums))