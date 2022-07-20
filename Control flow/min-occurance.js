let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let n=parseInt(readLine()); //taking input as no of input we are going to take
let first_num=parseInt(readLine()); //storing the first input so that we can compare it with others
let occurance=1; //as the first integer taken so we initialize occurace with 1

for(let i=1; i<n; i++)  //iterating for other input but one input already taken so iterate upto n-1
    {
    let p=parseInt(readLine()) //taking other input into a variable so that we copare with the firstnum
    if(p===first_num)          //checking if p===first num if true enter into body if not true go to else
    {
        occurance++ // increase occurance by 1
    }else{
        continue; //continue with the next iteration
    }
}
console.log(occurance); //printing the occurance 