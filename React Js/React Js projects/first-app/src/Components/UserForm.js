import React, { useState } from 'react'

const UserForm = ( props ) => {
    const [userData, setuserData] = useState( {
        firstName: "",
        lastName: '',
        age: null,
    } );

    const updateUserData = ( event ) => {
        setuserData( {
            ...userData,
            [event.target.name]: event.target.value,
        } );
    };

    const saveData = ( event ) => {
        // Do all the validations
        // once valid send the data to App
        props.getUserData( userData );
        // clearing the form if saved successfully
        setuserData( {
            firstName: "",
            lastName: '',
            age: null,
        } );
    };

    return (
        <div>
            <h1>Login Form</h1>
            First Name : <input
                type="text"
                value={ userData.firstName }
                name="firstName"
                onChange={ updateUserData } /> 
            <br />
            <br/>
            Last Name : <input
                type="text"
                value={ userData.lastName }
                name="lastName"
                onChange={ updateUserData } /> 
            <br />
            <br/>
                    Age : <input
                type="text"
                value={ userData.age }
                name="age"
                onChange={ updateUserData } /> 
            <br />
            <br/>
            <button onClick={saveData}>Login</button>
        </div>
    )
}

export default UserForm
