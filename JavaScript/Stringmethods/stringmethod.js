// String Methods are immutable
console.log( "=====toUpperCase method=======" );
let str = 'hello'
str = str.toUpperCase();
console.log( `str - ${str}` );

console.log( "=====toLowerCase method=======" );
str = str.toLowerCase();
console.log( `str - ${str}` );


console.log( "=====charAt method=======" );
str = str.charAt(2);
console.log( `str - ${str}` );

console.log( "=====indexOf method=======" );
str = str.indexOf('l',2);
console.log( `str - ${str}` );

// console.log( "=====concat method=======" );
// const greet = str.concat(' Good Morning');
// console.log( `str - ${greet}` );

// console.log( "=====Includes method=======" );
// str = str.includes('e');
// console.log( `str - ${str}` );

// console.log( "=====replace method=======" );
// str = str.replace('h','H');
// console.log( `str -${str}` );


// console.log( "=====replaceall method=======" );
// str = str.replaceAll('l','L');
// console.log( `str -${str}` );

console.log( '====trim method====' );
const note = '   Hello,Welcome to TY  '
const noteAfterTrim = note.trim();
console.log( noteAfterTrim );

console.log( '====trim Left====' );
const noteAfterTrimLeft = note.trimLeft();

console.log( `noteAfterTrimLeft -  ${noteAfterTrimLeft}` );

console.log( '====trim right====' );
const noteAfterTrimRight = note.trimRight();

console.log( `noteAfterTrimRight -  ${noteAfterTrimRight}` );

console.log( '======Split method====' );
const rev = 'hello';
const reverseString =rev.split('').reverse().join('');
console.log( reverseString );

const items = [
    {
        id: 1,
        name: 'Lipstick',
        price:600
    },
    {
        id: 2,
        name: 'Bangles',
        price:1000
    },
    {
        id: 3,
        name: 'Trimmer',
        price:2300
    },
    {
        id: 4,
        name: 'Beard Oil',
        price:1000
    },
]


const Price = items.filter(value =>value.price > 800 )
console.log( Price );

const length = items.filter( val => val.name.length > 8 )
console.log( length );

const addPriceWithHundred = items.map( val => {
    const addPriceWithHundredCopy = Object.assign( {}, val )
    addPriceWithHundredCopy.price += 100;
    return addPriceWithHundredCopy
});
console.log( addPriceWithHundred );

const ToUpperCase = items.map( val => {
   const ToUpperCaseCopy = Object.assign({},val)
    ToUpperCaseCopy.name= val.name.toUpperCase() 
    return ToUpperCaseCopy
} )
console.log(ToUpperCase);

console.log( items );

const shop = {
    id: 1,
    name: 'Lipstick',
    price:600
}
// for ( let keys in shop ) {
//     console.log(shop[keys]);
// }

// const shop1 = Object.entries( shop);
// console.log(shop1);



























