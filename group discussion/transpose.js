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
    let inner_arr=matrix[0]
    let n=inner_arr.length;
    let final=[]
    for(let row=0; row<n; row++){
        let arr=[]
        for(let coloum=0; coloum<matrix.length; coloum++){
            arr.push(matrix[coloum][row])
        }
        final.push(arr)
    }
    return final
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