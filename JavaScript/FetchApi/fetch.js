console.log( 'JS Started' );

async function fetchPost() {
    const response = await fetch( `https://jsonplaceholder.typicode.com/posts` )
    console.log( response );
    const data = await response.json();
    console.log( 'data', data );
    console.log( 'Hello' );
}

fetchPost()
console.log( "JS Ended" );


