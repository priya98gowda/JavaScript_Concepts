class Parent extends React.Component{
    state = {
        text : "" 
    }
    render() {
        return <div>
            <h1>{ this.state.text }</h1>
            <Child action={ this.getDataFromChild.bind(this)}/>
        </div>
    }
    getDataFromChild( childData ) {
        console.log('childData',childData);
         //setState is asynhorous  
        // this.setState( {
        //     text: childData
        // } )
        // console.log(this.state.text);

        // Use below way to update the state always
        this.setState( {
            text:childData
        }, () => {
                console.log('state text',this.state);
        })
    }
}

function Child(props) {
    const str = "Welcome"
    return <div>
        <button onClick={ () => { props.action( str ) } }>
            Send data to Parent
        </button>
    </div>
}

ReactDOM.render(<Parent/>,document.getElementById('container'))