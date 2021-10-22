function first() {
    setTimeout(() => {
        console.log('first function');
    }, 0 );
    console.log('Test your brain');
}

function second() {
    console.log("second function");
}

function third() {
    setTimeout(() => {
        console.log('third function');
    }, 0 );
    console.log('hello');
}


first();
second();
third();