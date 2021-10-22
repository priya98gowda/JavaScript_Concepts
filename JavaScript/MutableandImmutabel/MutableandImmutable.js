// primitive types are immutable
console.log( '========Immutable===========' );
var name1 = 'Ajay'
var nameCopy = name1;
console.log( name1 );
console.log( nameCopy );
console.log('===========================');
/* when we change the data of name1 variable it will not affect the data of nameCopy variable*/
 name1 = 'Girish'
console.log( name1 );
console.log( nameCopy );

// reference types are mutable
console.log('========Mutabel=============');
const person = {
    name: 'vijay',
    age:30
}

const personCopy = person
console.log( person.name );
console.log( personCopy.name );

/* when we change the data of person object variable it will affect the
data of personCopy variable because in memory both
person and personCopy variables are pointing to same object  */
console.log( '===========================' );

person.name = 'Abhi'
console.log( person.name );
console.log( personCopy.name );

// make object behave like immutable
const car = {
    model: 2020,
    brand:'BMW'
}

const carCopy = Object.assign({},car)
console.log( car.model );
console.log( carCopy.model );
console.log( '================' );
car.model = 2022
console.log( car.model );
console.log( carCopy.model );

console.log('================');
// Example for array mutable
let n = [10, 20, 30];
let n1 = n;
n = [50]
console.log( n );
console.log( n1 );

console.log('=================');
// example for array immutable
let numbers = [100, 200, 300, 400, 500];
let numbersCopy = numbers.slice( 1 );
console.log( numbers );
console.log(numbersCopy);



