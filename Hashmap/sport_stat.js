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
let num=parseInt(readLine())
let map_name_sport=new Map();
let sport_count=new Map();
let max=0
for(let i=0; i<num; i++){
    let user_data=readLine().split(" ")
    let name=user_data[0]
    let sport=user_data[1]
    if(map_name_sport.has(name)==false){
        map_name_sport.set(name,sport)
        if(sport_count.has(sport)){
            sport_count.set(sport,sport_count.get(sport)+1)
            max=Math.max(max,sport_count.get(sport))
        }else{
            sport_count.set(sport,1)
        }
        }else{
        continue 
    }
}
let arr=[]
for(let [k,v] of sport_count){
    if(v==max){
            arr.push(k)
    }
}
arr.sort()
conso

if(sport_count.get('football\r')===undefined){
    console.log(0)
}else{
    console.log(sport_count.get('football\r'))
}

