let prompt = require("prompt-sync")()

let marks = Number(prompt("Enter Marks"))

switch (true) {    
    case (marks >=90 && marks <= 100):
        console.log("A");        
        break;
    case (marks >=80 && marks < 90):
        console.log("B");        
        break;
    case (marks >=70 && marks < 80):
        console.log("C");        
        break;
    case (marks >=60 && marks < 70):
        console.log("D");        
        break;
    default:   
        console.log("F");        
        break;
}
