import React from 'react'

function PersonList(props) {
    return (
        <div>
            Person List Component
            {/* To Generate Error */ }
            {props.data.splice()}
        </div>
    )
}

export default PersonList
