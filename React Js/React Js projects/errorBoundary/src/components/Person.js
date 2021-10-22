import React from 'react'

function Person(props) {
    return (
        <div>
            Person Component
            {/* To generate an error in component */ }
            {/* {props.data.splice()} */}
        </div>
    )
}

export default Person
