var todaysDate = new Date();
console.log( `Today's Date ${todaysDate}` );

var futureDate = new Date( 2022, 1, 2, 12, 30, 45 );
console.log( `FutureDate ${futureDate}` );

var dateofBirth = new Date( 'November 14 1998' );
console.log( `Date of Birth ${dateofBirth}` );

var findDateUsingMilliseconds = new Date( 86400000 );
console.log( `Date With Milliseconds ${findDateUsingMilliseconds}` );

console.log( `Full Year ${todaysDate.getFullYear()}` );
console.log( `Month ${todaysDate.getMonth()}` );
console.log( `Date ${todaysDate.getDate()}` );
console.log( `Day ${todaysDate.getDay()}` );
console.log( `Date time ${Date.now()}` );


console.log( "=====================" );
var months = ['January', 'February', 'March', 'April', "May", 'June', 'July', "August", 'September', 'October', 'November', 'December'];
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday'];
var date = new Date( 'nov 14 2021' );
var month = date.getMonth();
var day = date.getDay();
console.log( `${days[day]}, ${months[month]} ${date.getDate()} , ${date.getFullYear()}` );

console.log( "======================" );
console.log( Math.round( 1.5 ) );
console.log( Math.abs( -6 ) );
console.log( Math.pow( 5, 6 ) );
console.log( Math.min( 1, 5 ) );
console.log(Math.max(5,6,90));
console.log( Math.ceil( 12.5 ) );
console.log( Math.floor( 12.2 ) );
console.log( Math.ceil(Math.random()*100)+1);

console.log("======================");


