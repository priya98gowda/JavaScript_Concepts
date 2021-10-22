function first(test) {
    setTimeout(() => {
        console.log( 'first function' );
        test();
    }, 1000 );
}

function second() {
    console.log("second function");
}

first(second);

