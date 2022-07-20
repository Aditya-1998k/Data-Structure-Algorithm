let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Define your class here
// your class name should be 'Movie' and  method name as 'run'
class Movie{
    constructor(lengthInMinutes, numCharacters, language){
                this.language=language;
                this.numCharacters=numCharacters;
                this.lengthInMinutes=lengthInMinutes;
    }
    run(){
        let p="This is a "+this.language+" movie with "+ this.numCharacters+" characters and is "+this.lengthInMinutes+" minutes long.";
        return p
    }
}


// DO NOT CHANGE ANYTHING BELOW THIS LINE

let language = readLine();
let numCharacters = readLine();
let lengthInMinutes = readLine();

let movie =  new Movie(lengthInMinutes, numCharacters, language)
console.log(movie.run());