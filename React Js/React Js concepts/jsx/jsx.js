const userName = 'Priya'
const element = <h1 id='demo'>welcome , { userName}</h1>;

const mobiles = ['Honor', 'Apple', 'Xiamoi', 'Samsung'];

const items = <ul>
    { mobiles.map( ( mobile, index ) => {
        return <li key={index}>{mobile}</li>
    } ) }
</ul>
        
ReactDOM.render(element, document.getElementById('container'))
// ReactDOM.render(items, document.getElementById('container'))


