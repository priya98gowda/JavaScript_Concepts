import React, { Component } from 'react'
import withCounter from '../hoc/withCounter'

export class ClickCounter extends Component {

    render() {
        const {count,incrementCount} = this.props
        return (
            <div>
                <button onClick = {incrementCount}>Clicked {count} times</button>
                <p> User Name - {this.props.userName}</p>
            </div>
        )
    }
}

export default withCounter(ClickCounter)
