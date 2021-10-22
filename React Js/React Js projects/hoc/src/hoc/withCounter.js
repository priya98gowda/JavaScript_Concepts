import React, {  Component } from 'react'

const withCounter =(WrappedComponent, value =1) =>{

class EnhancedCounter extends Component {
    state ={
        count : 0,
    }
    incrementCount = () => {
        this.setState({
            count : this.state.count + value
        })
    }
    render() {
        return (
           <WrappedComponent count = {this.state.count}
           incrementCount = {this.incrementCount}
           // very much important and the previously passed props to returned component
           {...this.props}/>
        )
    }
  }
  return EnhancedCounter
} 
export default withCounter
