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
let total_order=parseInt(readLine())
let total_table=parseInt(readLine())
let table=[]
for(let i=0; i<total_table; i++){
    table.push(i+1)
}
let table_num=[]
let table_value=[]
for(let i=0; i<total_order; i++){
    table_num.push(parseInt(readLine()))
}
for(let i=0; i<total_order; i++){
    table_value.push(parseInt(readLine()))
}

let final_bill=[]
for(let i=1; i<=total_table; i++){
    let sum=0
    for(let j=0; j<table_num.length;j++){
        if(table_num[j]===i){
            sum=sum+table_value[j]
        }
    }
    final_bill[i-1]=sum
}

let max=final_bill[0]
for(let i=0; i<final_bill.length; i++){
    if(max<final_bill[i]){
        max=final_bill[i]
    }
}
let result=[]
for(let i=0; i<final_bill.length; i++){
    if(max===final_bill[i]){
        result.push(table[i])
    }

}
for(let element of result){
    console.log(element)
}

