var x = 10;              //global scope
console.log( x );

function test() {
    var x = 20;
    console.log(x);          //local scope
}


for ( var i = 0; i < 5; i++ ){
    console.log(i);
}
console.log( i );


var y = 20;
var y = 30;
console.log( y );

var z = 10;
z = 50;
console.log( z );

/*

console.log("================");
function accessLet (p)r{
}oblems with var keyword
1.Hoisting
2.Block scope is not supported
3.Redeclaration is allowed
4.reassigning is allowed

To overcome above problems let and const keyword was introduced in Es6 */

// let keyword
console.log( "=====================" );
let a = 10;
console.log('Global Access',a);

console.log("================");
function accessLet() {
    console.log('inside function',a);
}
accessLet()


console.log('====================');
for ( let j = 0; j < 3; j++ ){
    console.log(j);
}
// console.log( j ); //j is not defined

console.log("================");
// console.log( b );
// let b = 80; //Cannot access 'b' before initialization

console.log( '====================' );
// let c = 12;
// let c = 10;  //Identifier 'c' has already been declared

console.log( '======================' );
let d = 100;
console.log( d );
d = 10;
console.log( d );

// const keyword
// console.log( p );
// let p = 10;     Cannot access 'p' before initialization

console.log( '==============' );
// for ( const k = 0; k < 3; k++ ){
    //     console.log(k);
    // }  Assignment to constant variable.
    // console.log(k);

console.log('====================');
if ( 10 > 6 ) {
    const name = 'priya'
    console.log(`Name - ${name}`);
}

console.log( '===================' );
function constFunctionScope() {
    const r = 90;
    console.log(r);
}
constFunctionScope()
// console.log(r);  //r is not defined


console.log( '==================' );
const m = 200;
// const m = 300; Identifier 'm' has already been declared

console.log( '====================' );
const n = 90;
// n = 100;   //Assignment to constant variable.

const fruits = ['Apple', 'Mango', 'Banana'];
// fruits = ['Grapes']; //this will not support because we are using Assignment operator 
fruits.push( 'KIWI' );
console.log(fruits);