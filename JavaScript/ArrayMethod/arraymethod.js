// ForEach Method
console.log("========forEach with function keyword===========");
let numbers1 = [10, 20, 30];
numbers1.forEach( function ( value, index ) {
    console.log(`Value ${value}  Index ${index}`);
} )

console.log( "=======forEach with arrow function=========" );
numbers1.forEach( ( value, index ) => console.log( `Value ${value}  Index ${index}` ) );

console.log( "=======================" );
let animals = ['Tiger', 'Horse', 'Panda'];
animals.forEach( ( value, index ) => console.log( `Value ${value}  Index ${index}` ) );

console.log( "===forEach for array Object=========" );
let books = [
    {
        title: 'Java',
        price:1200,
    },
    {
        title: 'Javascript',
        price:1000,
    },
    {
        title: 'Python',
        price:750
    },
]
books.forEach( value => console.log( value ) );
console.log("===========================");

books.forEach( value => {
    if ( value.price > 1000 ) {
        console.log(value);
    }
} )

console.log( "========isArray method=========" );
let numbers = [10, 20, 30, 40];
console.log( Array.isArray( numbers ) );

let person1 = {
    name:'priya'
}
console.log(Array.isArray(person1));


console.log( "====Push Method=========" );
let num = [0, 25, 50];
let result= num.push( 75, 100 );
console.log( num );

console.log( "====Pop Method======" );
let person = ['priya', 'preethi', 'anu', 'purni', 'mouni'];
let removed = person.pop();
console.log( removed );
console.log( person );

console.log( '======Includes Method===========' );
let n1 = [10, 20, 30, 40, 50];
 result = n1.includes( 20);
console.log( `Has twenty ${result}` );

const hasElement = n1.includes( 500000 )
console.log( `Has element - ${hasElement}` );

const hasThirty = n1.includes( 30, 2);
console.log( `Has thirty ${hasThirty}` );

console.log( '====Splice Method====' );
const n = [20, 40, 50, 60];
console.log(`n before splice ${n}`);
const removedElemnets = n.splice( 2, 2, 70, 100 );
console.log(removedElemnets );                 //Original array is modified
console.log( `n after splice ${n}` );

console.log( '===Slice Method====' );
const n2 = [10, 20, 30,40,50];
console.log(`n2 before slice ${n2}`);
const elements = n2.slice( 0,2);
console.log( `n2 after slice ${n2}` );   //Original array is not modified
console.log(`Elements - ${elements} `);

console.log( '=======IndexOf Method====' );
const n3 = [10, 20, 30]
const r = n3.indexOf( 10 );
if (r!==-1 ) {
    console.log('present');
} else {
    console.log('Not Present');
}

console.log( '===Join Method===' );
const num1 = [10, 20, 30];
console.log( num1.join( '-' ));

console.log( '=====Map Method=========' );
const nums = [100, 200, 300];

const numsPlusTenUsingArrowFunc = nums.map( val => val + 10 );
console.log( `numsPlusTenUsingArrowFunc - ${numsPlusTenUsingArrowFunc}` );

const numsPlusTen = nums.map( function ( value, index ) {
    val = value + 10;
    return val
} )
console.log( `numsPlusTen - ${numsPlusTen}` );


console.log( '=====Filter Method=============' );
const number = [100, 200, 300, 400, 500];
const numberWithFilter = number.filter( function ( value, index ) {
    if ( value > 250 ) {
        return true;
    } else {
        return false
    }
} )
console.log( `numberWithFilter - ${numberWithFilter}` );

const numberWthFilterUsingArrowSingle = number.filter( val => val > 250 )
console.log( `numberWthFilterUsingArrowSingle -${numberWthFilterUsingArrowSingle}` );

const numberWthFilterUsingArrow = number.filter( val => {
    return val>250
} )
console.log( `numberWthFilterUsingArrow - ${numberWthFilterUsingArrow}` );


const fruits = ['Apple', 'Orange', 'Kiwi', 'Grapes'];

const fruitsWithArrowFunction = fruits.filter( val => val.includes('e'))
console.log( fruitsWithArrowFunction );


const fruitsLength = fruits.filter( val => val.length > 5)
console.log( fruitsLength );

const fruitsUpper = fruits.map( val =>val.toUpperCase() )
console.log(fruitsUpper);


