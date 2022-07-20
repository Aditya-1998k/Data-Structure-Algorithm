let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Your class should be named `CarSell`.
// Your method should be named `getPromisingCustomers`
// Your method should return the indices of customers who are willing to pay greater than or equal to 90% of the car value
class CarSell{
    constructor(customerProposals,numCustomers){
        this.customerProposals=customerProposals;
        this.numCustomers=numCustomers;
    }
     
    getPromisingCustomers(){
        let p=900000;
        let arr=[];
        for(let i=0; i<this.customerProposals.length; i++){
            if(this.customerProposals[i]>=p){
                arr.push(i)
            }
            
        }
        if(arr.length>0){
            return arr
        }else{
            arr=[-1]
            return arr
        }
    }
}


let numCustomers = parseInt(readLine());
let customerProposals = [];
for (let i = 0; i < numCustomers; i++) {
  customerProposals.push(parseInt(readLine()));
}

let car = new CarSell(customerProposals);
for (let j of car.getPromisingCustomers()) {
  console.log(j);
}
