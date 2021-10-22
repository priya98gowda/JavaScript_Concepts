function first() {
    setTimeout(() => {
        console.log('first function');
    }, 1000 );
}

function second() {
    console.log("second function");
}

first();
second();
