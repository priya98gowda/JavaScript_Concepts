var fruits = ['Apple', 'Banana', 'Mango', 'Orange'];

allFruits = '';
var count = 0;

for (var fruit of fruits) {
    // console.log( `Fruits - ${fruit}` );
    if (count < fruits.length) {
        count;
    }
}
console.log(allFruits);

console.log( '============for In loop for Object===========' );
var person = {
    name: 'priya',
    age: 20,
    designation: 'Associate software developer',
}

for ( var i in person ) {
    console.log(`${i} - ${person[i]}`);
}

console.log( "=========for in loop for arrays============" );
var brands = ['BMW', 'Ferrari', 'Fortune', 'Lamborghini'];
for ( var i in brands ) {
    console.log(`${i} {brands[i]`);
}

console.log( "========================" );
var numbers = [10, 20, 30, , , , 100];
for ( var i = 0; i < numbers.length; i++ ){
    console.log(numbers[i]);
}

console.log( "===========================" );
for ( var index in numbers ) {
    console.log(`${index} ${numbers[index]}`);
}

console.log( "========================" );
var book = {
    title: 'Web Fundamentals',
    price: 1200,
}
var books = ['Web Fundamentals', 'Javascript', 'Java'];

book[0] = 'Python';
book['Element'] = '.net';

console.log("=====================");
for ( var i = 0; i < book.length; i++ ){
    console.log(books[i]);
}
console.log( "====================" );
for ( var i in book ) {
    console.log(book[i]);
}

