import React, { Component } from 'react'
import FuncComp from './FuncComp';
import RegComp from './RegComp';

export class ParentComp extends Component {
    state = {
        uname:'priya'
    }
    componentDidMount() {
        setInterval(() => {
            this.setState( {
                uname:'priya'
            })
        }, 2000);
    }
    render() {
        return (
            <div>
                <RegComp uname={ this.state.uname } />
                <FuncComp uname={this.state.uname}/>
            </div>
        )
    }
}

export default ParentComp
