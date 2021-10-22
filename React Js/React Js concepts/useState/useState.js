function MyApp() {
    // const [name, setName] = React.useState( 'priya' );
    // const [isAdmin, setIsAdmin] = React.useState( true );
    // const updateName = () => {
    //     setName( name + " "+'gowda' );
    //     setIsAdmin( false );
    //     console.log(isAdmin);
    // }
    return <div>
        <h1>{ name }</h1>
       <button onClick={updateName}>Update Name</button>
    </div>
}
ReactDOM.render(<MyApp/>,document.getElementById('container'))