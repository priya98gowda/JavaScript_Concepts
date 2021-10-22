import React from 'react'
import { UserConsumer } from '../context/Context'

function ComponentC(props) {
    return (
        <div>
            <UserConsumer>
                { ( data ) => {
                    return <div>
                        <h2 style={{color:'blueviolet'}}>{ data}</h2>
                    </div>
                }}
            </UserConsumer>
            Data from props Drilling : <b>{props.uname}</b>
        </div>
    )
}

export default ComponentC
