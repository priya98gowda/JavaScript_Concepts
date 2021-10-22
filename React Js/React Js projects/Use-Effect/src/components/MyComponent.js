import React, { useEffect } from 'react'
import { useState } from 'react';

function MyComponent() {
    const [isAdmin, setisAdmin] = useState( false );
    const [name, setname] = useState( '' );
    // Don't ever use useEffect like below in project because it will execute everytime
    /* useEffect( () => {
        console.log( "useEffect is executed" );
        return () => {
            // this function will be executed when component will unmount
            console.log("component will unmount");
        }
    } ) */
/* 
    write useEffect like below
    the below function will get executed when component is mounted to real Dom
    the below function is equivalent to componentDidMount of class component */

    useEffect(() => {
        console.log( "useEffect executed when component mounted" );
        /* the below funionction will get executed before unmounting the component from Real Dom
        the below function is equivalent to componentWillUnmount of class component */

        return () => {
            console.log(`first useEffect executed before component is unmount`);
        }
    }, [] )
    
    useEffect(() => {
        /* the below funionction will get executed before unmounting the component from Real Dom
        the below function is equivalent to componentWillUnmount of class component */

        return () => {
            console.log(`second useEffect executed before component is unmount`);

        }
    }, [] )
    /* 
    the below useEffect will executed whenever name is updated with different value
        ( Note: If name is updated  to same value again and again the below useEffect will not get executed and also rerender will not happen i.e., return statement will also not execute) */
    
    useEffect(() => {
        if ( name ) {
            console.log(`useEffect will get executed when name is changed ${name}`);
        }
       
    }, [name] )
    
    const updateName = () => {
        setname('Priya')
    }
    const updateIsAdmin = () => {
        setisAdmin(true)
    }
    return (
        <div>
            {console.log('return Executed')}
            {isAdmin ? "Admin" : "User" }
            <button onClick={ updateIsAdmin }>Click</button>
            <p> Name : { name}</p>
            <button onClick={ ()=>{updateName()}}>Update Name</button>
        </div>
    )
}

export default MyComponent
