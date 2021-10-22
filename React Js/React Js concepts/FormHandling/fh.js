function MyApp() {
    const [user, setUser] = React.useState( {
        userName: '',
        password: '',
    } );
    const login = event => {
        event.preventDefault();
        console.log(user);
    }
    const updateUserName = event => {
        console.log( event.target.value );
        setUser( {
            ...user,
            userName:event.target.value
        })
    }
    
    const upatePassword = event => {
        console.log( event.target.value );
        setUser( {
            ...user,
            password:event.target.value
        })
    }
    return <form>
        UserName:<input type="text" onChange={(event)=> updateUserName(event) } value={ user.userName}/>
        <br />
        <br/>
        Password:<input type="password" onChange={ (event)=>upatePassword(event) } value={ user.password}/>
        <br />
        <br/>
        <button onClick={ login }>Login</button>
        <p>{ user.userName}</p>
        <p>{ user.password}</p>
    </form>
}

ReactDOM.render( <MyApp />, document.getElementById( 'container' ) );