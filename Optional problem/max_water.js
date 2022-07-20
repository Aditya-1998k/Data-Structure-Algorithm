var maxArea = function(height) {
    let arr=[]
    if(height.length===2){
        if(height[0]<height[1]){
            return height[0]
        }else{
            return height[1]
        }
    }else{
     for(let i=0; i<height.length-1; i++){
        let p=i+1;
        for(let j=0; j<height.length; j++){
                if(height[i]<height[j]){
                    arr.push(p*height[i])
                }else if(height[i]>height[j]){
                    arr.push(p*height[j])
                }else if(height[i]===height[j]){
                    arr.push(height[i]*j)
                }
                        
        }
    }
}
    let max=arr[0]
    for(let i=1; i<arr.length; i++){
        if(max<arr[i]){
            max=arr[i]
        }
    }
    return max
};
let p=[2]
console.log(maxArea(p))