const element = React.createElement( 'ul', null,
    React.createElement( 'li', {id:'car'}, 'Bike' ),
    React.createElement( 'li', { id: 'jeep' }, 'jeep' ) )
    // console.log(element);

const mobiles = ['Samsung', 'Oppo', 'Apple', 'Vivo', 'Oneplus'];
const mobileItems = React.createElement( 'ul', null,
    mobiles.map( ( mobile, index ) => {
        return React.createElement( 'li', { key: mobile + index }, mobile )
    } ) );


const allItems = React.createElement( 'div', null, element, mobileItems );
console.log(allItems);
// console.log(mobileItems);
// ReactDOM.render( element, document.getElementById( 'container' ) );
// ReactDOM.render(mobileItems , document.getElementById( 'container' ) );
ReactDOM.render(allItems , document.getElementById( 'container' ) );

