class MyApp extends React.Component{
    state = {
        adminName: 'Girish',
        userName: 'Guru',
        isAdmin : true
    }
    render() {
        const { adminName, userName, isAdmin } = this.state;
        let renderData = null;
        if ( isAdmin ) {
            renderData = <div>
                <h1>{ adminName }</h1>
                <div>Home</div>
                <div>Login</div>
            </div>
        } else {
            renderData = <div>
                <h1>{ userName }</h1>
                <div>Login</div>
            </div>
        }
        return (
            <div>
                {/* {this.state.isAdmin ? <h1> { this.state.adminName }
                    <Home /> <Login />
                    <button>Click here to view UserData </button></h1> :
                    <h1>{ this.state.userName } <Login />
                    <button>Click here to view AdminData</button></h1> }  */}
                {renderData }
                <button onClick={ () => { this.changeAdminUserView() } }>{ isAdmin?'click here to see user view':'click here to see admin view'}</button>
            </div>
        )
    }
    changeAdminUserView = () => {
        // this.setState( {
            
        //     isAdmin : !this.state.isAdmin
        // })
        if ( this.state.isAdmin ) {
            this.setState( {
                isAdmin:false,
            })
        } else {
            this.setState( {
                isAdmin:true,
            })
        }
    }
}



ReactDOM.render(<MyApp/>,document.getElementById('container'))