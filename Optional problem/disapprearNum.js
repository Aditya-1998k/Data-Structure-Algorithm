var findDisappearedNumbers = function(nums) {
    let num=nums.length;
    let arr=[]
    count=0
    for(let i=1; i<=num; i++){
        let p=i
        for(let j=0; j<nums.length; j++){
            if(p===parseInt(nums[j])){
                count++
            }
        }
        if (count===0){
                arr.push(i)
        }else{
            count=0
        }
    }
    return arr
};
let p=[1,1]
console.log(findDisappearedNumbers(p))