let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// you should return a list of lists
function transposeMatrix(matrix){
	//implement this function
    let arr=[]
    for(let i=0; i<matrix.length; i++){
        let arr_inside=matrix[i]
        var n=arr_inside.length
        for(let j=0; j<arr_inside.length;j++){
                arr.push(parseInt(arr_inside[j]))
        }
    }
    let arr_final=[]
    for(let i=0; i<n; i++){
        
        let arr_inside2=[]
        
        for(let j=i; j<arr.length; j=j+n){
            arr_inside2.push(arr[j])
        }
        
        arr_final.push(arr_inside2)
        
    }
return arr_final
}



// do not change anything below this line
let m = parseInt(readLine());
let matrix = [];
for(let index = 0; index < m; index++){
	let row=readLine().split(" ");
	matrix.push(row);
}
let result = transposeMatrix(matrix);
for(row of result){
	console.log(...row);
}