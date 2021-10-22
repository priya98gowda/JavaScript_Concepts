function showName() {
    console.log( 'My Name is : Priya' );
    const h1Element = document.querySelector( '.showHideName' );
    console.log( h1Element );
    h1Element.style.display = 'block'
}

function hideName() {
    const h1Element = document.querySelector( '.showHideName' );
    console.log( h1Element );
    h1Element.style.display = 'none';
}

function showHideName() {
    const h1Element = document.querySelector( '.showHideName' );
    if ( h1Element.style.display === 'block' ) {
        h1Element.style.display = 'none';
    } else {
    h1Element.style.display = 'block'
    }
}


function showItem() {
    const h1Element = document.querySelector( '.showHideItem' );
    h1Element.style.visibility = 'visible'
}

function hideItem() {
    const h1Element = document.querySelector( '.showHideItem' );
    console.log( h1Element );
    h1Element.style.visibility = 'hidden';
}

function getPrice() {
    // console.log( 'price' );
    const getValue = document.getElementById( 'price' );
    console.log( 'Value - ', getValue.value );
  
}

function showPrice() {
    // console.log( 'showprice' );
    const getValue = document.getElementById( 'price' );
    console.log( 'Value - ', getValue.value );
    const divElement = document.getElementById( 'priceValue' )
    divElement.innerText = getValue.value
}

const buttonEvent = document.getElementById( 'clickEvent' );
buttonEvent.addEventListener( 'click', e => {
    console.log( 'clicked' );
    // console.log(e);
})


const inputEle = document.getElementById( 'nameValue' );
inputEle.addEventListener( 'keyup', e => {

    if ( e.key === 'Enter') {
        console.log( e.target.value );
    }
} )


const butEle = document.getElementById( 'checkAgree' )
butEle.addEventListener( 'click', () => {
    document.getElementById( 'agree' ).checked = true
    
})


