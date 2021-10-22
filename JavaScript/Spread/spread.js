const person = {
    name: 'priya',
    age: 20,

}
const personCopy = { ...person }
console.log( personCopy );

console.log( '====================' );
const numbers = [1, 20, 30, 40, 50];
const numbersCopy = [...numbers]
console.log( numbersCopy );

console.log( '=====================' );
const person1 = {
    age: 20,
    pname:'Anu'
}
const address = {
    city: 'Bangalore',
    pincode:560078,
}

const peson1Address = { ...person1, ...address }
console.log( peson1Address );

const person2 = {
    age:50,
    color: 'white',
    languages:['kannada','english']
}

const { age, color } = { ...person2, ...person1}
console.log( age );
console.log(color);
