const person={
    name:'ajay',
    age:23,
    address:{
        city:"bangalore",
        pincode:560018
    },
}
const p=Object.assign({},person);
person.address.city='hyderabad';
console.log(person.address.city);
console.log(p.address.city);
console.log("....................");
console.log(person.name);
console.log(p.name);


let myobj={
    name:'jyo',
    age:34,
}
for( [key, value] of Object.entries(myobj)){
    console.log(key);
    console.log(value);
}
