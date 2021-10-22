function MyApp() {
    const [person, setPerson] = React.useState( {
        firstName: 'priya',
        lastName: 'gowda',
    } );
    const changeFirstName = () => {
        setPerson( {
            ...person,
            firstName:'preethi'
        })
    }
    return <div>
        <h1>{ person.firstName } { person.lastName }</h1>
        <button onClick={changeFirstName}>Change FirstName</button>
    </div>
}
ReactDOM.render( <MyApp />, document.getElementById( 'container' ) );