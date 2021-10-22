// Variable Hoisting

console.log( x );
var x = 10;
console.log( "=============" );

// Function Hoisting
function hoist() {
    console.log( y );
    var y = 10;
}
hoist()

console.log("=============");
var a = 10; //Global variable
function test() {
    console.log(a);
    var a = 40; //local variable
}
test()

console.log( "====================" );

// Uncaught TypeError: wish is not a function
// Access arrow function after declaring and designing
wish();
var wish = () => {
    console.log( "Happy Gowri Ganesha chaturthi" );
}