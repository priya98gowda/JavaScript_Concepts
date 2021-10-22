function MyApp() {
    const [bikes, setBikes] = React.useState( ['BMW', 'KTM', 'HarleyDavidson', 'Vikrant'] );
    const removeKTM = () => {
        const indexOfKTM = bikes.indexOf( 'KTM' );
        if ( indexOfKTM >= 0 ) {
            bikes.splice( indexOfKTM, 1 );
            setBikes( [...bikes] );
        }
    }
    const navigateToGoogle = (e) => {
        e.preventDefault();
        console.log(e);
    }
    return <div>
        { bikes.map( ( bike, index ) => {
            return <p key={ index }>{ bike}</p>
        } ) }
        <button onClick={ removeKTM }>Remove KTM</button>
        <hr />
        <button onClick={ (event)=>navigateToGoogle(event) }>Click</button>
        <a href="https://www.google.com" onClick={navigateToGoogle}>Click</a>
    </div>
}
ReactDOM.render(<MyApp/>,document.getElementById('container'))