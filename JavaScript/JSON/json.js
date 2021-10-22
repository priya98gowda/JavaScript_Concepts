const person = {
    name: 'priya',
    age: 20,
    color:'medium',
}

// can use this for deep copy
const stringifiedPerson = JSON.stringify( person );
console.log( 'After conversion from JS to JSON', stringifiedPerson );
console.log( '===============================' );
const jsPersonObject = JSON.parse( stringifiedPerson );
console.log( 'After conversion from JSON to JS', jsPersonObject );
