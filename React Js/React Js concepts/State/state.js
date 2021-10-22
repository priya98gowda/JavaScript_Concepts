class Greet extends React.Component{
    state = {
        firstName:'priya'
    }
    constructor ( props ) {
        super( props )
        // this.state = {
        //     firstName :'priya'
        // }
    }
    render() {
        return <div>
            <h1>{ this.state.firstName }</h1>
            <button onClick={()=>{this.changeName()}}>Change Name</button>
        </div>
    }
    changeName() {
        // Never ever mutate the state like below
        // this.state.firstName = 'preethi'
        console.log( 'Before changing State', this.state.firstName );
        this.setState( {
           firstName:'preethi',
        } )
        console.log( 'After changing State', this.state.firstName );
        
    }
}
ReactDOM.render( <Greet />, document.getElementById( 'container' ) );