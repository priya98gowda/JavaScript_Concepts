const person = {
    name: 'priya',
    age: 20,
    color:'medium'
}
person['name'] = 'anu'

const { name, age } = person;
console.log( name );
console.log( age );
console.log(person);

console.log( '=============================' );

const hobbies = ['Swimming', 'Dancing', 'Travelling', 'Rampwalk'];
const [hobby1, hobby2, hobby3] = hobbies;

console.log(hobby1);
console.log(hobby2);
console.log( hobby3 );

console.log('==============================');
const person1 = {
    name: 'priya',
    age: 20,
    color: 'medium',
    address: {
        city: 'Bangalore',
        pincode:560078,
    },
    hobbies: ['Reading','Googling','Numismatics']

}

// const { address } = person1
// console.log(address);

// or


const { city, pincode } = person1.address
const {hobbies : [h1,h2]} = person1
console.log(h1);
console.log(h2);
console.log( city );

console.log('=============================');
const person2 = {
    pname: 'priya',
    page: 20,
    pcolor: 'medium',
    paddress: {
        pcity: 'Bangalore',
        pPincode:560078,
    },
    phobbies: ['Reading','Googling','Numismatics']

}

const { pname, paddress: { pcity, pPincode } } = person2
console.log( pname );
console.log( pcity );
console.log(pPincode);