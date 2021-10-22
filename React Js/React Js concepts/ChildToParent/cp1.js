class Parent extends React.Component{
    
        state = {
            text:'',
        }
    
   getDataFromChild1 (child1Data)  {
       console.log( child1Data );
    //    debugger
       this.setState( {
           text: child1Data
        })
    }
    render() {
        return (
            <div>
                <h1>{ this.state.text}</h1>
                <Child1 data={this.getDataFromChild1.bind(this)}/>
            </div>
        )
    }
}

class Child1 extends React.Component{
    render() {
        let  str ='Welcome'
        return (
            <div>
                <button onClick={()=>{this.props.data(str)}}>
                    Click Me
                </button>
            </div>
        )
    }
}



// class Parent extends React.Component{
    
//     render() {
//         const str="Welcome"
//         return (
//             <div>
//                 <button onClick={ () => { test( str ) } }>click</button>
//                 <Child str={ str}/>
//             </div>
//         )
//     }
// }
// class Child extends React.Component{
//     state = {
//         text:'',
//     }
//     render() {
//         return (
//             <div>
//                 this.setState({
//                     text:this.props.Welcome
//                 })
//             </div>
//         )
//     }
// }



ReactDOM.render( <Parent />, document.getElementById( 'container' ) );
