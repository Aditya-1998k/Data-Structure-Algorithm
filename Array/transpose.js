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
function transposeMatrix(matrix){
    
    let result=[]
    let inner_arr=matrix[0]
    for(let i=0; i<inner_arr.length; i++){
        let arr=[]
            for(let j=0; j<matrix.length; j++){
                arr.push(matrix[j][i])
            }
            result.push(arr)
    }
        return result
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








