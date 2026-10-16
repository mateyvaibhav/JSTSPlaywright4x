let prompt = require("prompt-sync")();
let number = prompt("Enter Number : ")

for(let index=1; index<=number; index ++) {
    result = ""
    
    if(index % 3 == 0 && index % 5 == 0) 
        result = "FizzBuzz"
    else if(index % 3 == 0)
        result = "Fizz"
    else if(index % 5 == 0)
        result = "Buzz"
    else
        result = index

    console.log(result);
}
