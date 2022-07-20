let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Define your class here
// your class name should be 'Movie' and method names as 'certify' and 'run'
class Movie{
    constructor(lengthInMinutes, numCharacters, language){
        this.lengthInMinutes=lengthInMinutes;
        this.numCharacters=numCharacters;
        this.language=language;

    }
        certify(){
            if(this.lengthInMinutes<=240 && this.numCharacters>=2){
                return true
            }else{
                return false
            }
        }
        run(){
            if(this.certify()===true){
                return `This is a ${this.language} movie with ${this.numCharacters} characters, is ${this.lengthInMinutes} minutes long, and is certified.`
            }else{
                return `This is a ${this.language} movie with ${this.numCharacters} characters, is ${this.lengthInMinutes} minutes long, and is not certified.`
            }
        }

}

// DO NOT CHANGE ANYTHING BELOW THIS LINE


let language = readLine();
let numCharacters = parseInt(readLine());
let lengthInMinutes = parseInt(readLine());

let movie =  new Movie(lengthInMinutes, numCharacters, language)
console.log(movie.run());