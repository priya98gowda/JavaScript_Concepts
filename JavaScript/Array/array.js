var fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
console.log( "=========Fruits===========" );
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log( fruits[3] );

console.log("==========================");
for ( var i = 0; i < fruits.length; i++ ){
    console.log(`fruit at index ${i} ${fruits[i]}`);
}

console.log( "=========================" );
for ( var i = fruits.length-1 ; i >=0 ; i-- ){
    console.log(`fruit at index ${i} ${fruits[i]}`);
}

console.log("======================");
var boolean = [true, false,true,false];
console.log( boolean );

var person = ['Shubash Chandra Bose', 150, 'white', true];

for ( var i = 0; i < person.length; i++ ){
    console.log( `Name ${person[0]} 
    Age ${person[1]}
     Color ${person[2]}
      Married ${person[3]}` );
}

console.log( "==================" );
var movies = new Array( 'KGF 2', 'pushpa', 'RRR', 'Spiderman no way home', "jersey", '83' );
for ( var i = 0; i < movies.length; i++ ){
    console.log(movies[i]);
}

console.log( "=================" );
// movies.length = 0;
// or
movies = [];
console.log( "Movies", movies );

console.log("========Array object");
var books = [
    {
        title: 'JavaScript',
        price: 1500,
    },
    {
        title: 'Java',
        price: 700,
    },
    {
        title: 'Python',
        price: 1000,
    },
]

for ( var i = 0; i < books.length; i++ ){
    if ( books[i].price > 1000 ) {
        console.log(books[i]);
    }
}
console.log("==================");

for ( var i = 0; i < books.length; i++ ) {
    if ( books[i].title.length > 4 ) {
        console.log( books[i] );
    }
}