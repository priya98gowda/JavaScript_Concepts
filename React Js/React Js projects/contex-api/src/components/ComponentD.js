import React, { useContext } from 'react'

import LoginContext from '../context/loginContext'

function ComponentD() {
    const context = useContext( LoginContext )
    console.log( "context", context );
    const logout = () => {
        context.logoutUser()
    }
    return (
        <div>
            {context.login ? <p>{ context.userName } is Logged In</p> :
                <p>Please Login...!</p> }
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default ComponentD
