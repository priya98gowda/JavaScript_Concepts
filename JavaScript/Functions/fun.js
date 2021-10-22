// 1. Named Function

function add( n1, n2 ) {
   var sum = n1 + n2;
    return sum;
}
var result = add( 10, 20 );
console.log( `Result = ${result}` );

// 2.Anonymous Function

var subtract = function ( n1, n2 ) {
    return n1 - n2;
}
var result = subtract( 12, 10 );
console.log( `Result = ${result}` );

// 3.IIFE FUNCTION
( function ( n1, n2 ) {
    var product = n1 * n2
    console.log(`Product = ${product}`);
} )(10,20);

// 4.Arrow Function
var divide = ( n1, n2 ) => n1 / n2;
var d = divide( 10, 20);
console.log( `Value = ${d}` );

// single parameter paranthesis is optional
var greet = name => {
    return `Welcome to the team ${name}`;
}

console.log(greet('TechnoElevate'));

// no parameter parenthesis is required
var printTenNumbers = () => {
    for ( var i = 0; i < 10; i++ ){
        console.log(i);
    }
}
printTenNumbers();
 
// 

function findSquareOfTwoNumbers (n1) {
    return function () {
        console.log(`Square of Two numbers= ${n1*n1}`);
    }
}

var squareFunction = findSquareOfTwoNumbers(9);
console.log( `Square Function = ${squareFunction}` );
squareFunction();

console.log( "=============================" );
findSquareOfTwoNumbers( 10 )();

// 5.CallBack Function
function test( callback ) {
    console.log( 'test method' );
    callback();
}

function sample() {
    console.log('sample method');
}
test( sample );


