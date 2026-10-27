// var is function scoped
// let is block scoped
// const is block scoped

// VARIABLE - Fn Scoped

var a = 10;
console.log(a); // 10
function printHello() {
    console.log("Hello TheTestingAcademy");
    var a = 20;
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a);
    }
    console.log(a);
}

printHello();