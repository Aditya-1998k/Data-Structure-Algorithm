var generate = function(numRows) {
    let arr=[]
    
    let prevRow=[1]
    arr.push(prevRow)
    for(let row=2; row<=numRows; row++){
        let currentRow=[]
        for(let col=0; col<row;col++){
            if(col===0){
                currentRow[col]=1
            }
            else if(col===row-1){
                currentRow[col]=1
            }
            else{
                currentRow[col]=prevRow[col-1]+prevRow[col]
            }

        }arr.push(currentRow)
        prevRow=currentRow
    }
    return arr
};
console.log(generate(5))