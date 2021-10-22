class Parent extends React.Component {
    constructor ( props ) {
        /* 1.used for initilization.
         2.bind the methods */
        super( props )
        this.state = {
            text: 'mounting phase',
            show: true
        }
        console.log( 'Parent constructor executed' );
    }
    static getDerivedStateFromProps( props, state ) {
        /*   1.return new state */
        console.log( 'parent getDerivedStateFromProps executed' );
        return state
    }
    render() {
        /* 1.return JSX
        2.no side effects
        3.should not update state */
        console.log( 'parent render executed' );
        return <div>
            <p>{ this.state.text }</p>
            <button onClick={ () => { this.updateText( 'updating phase' ) } }>
                Click
            </button>
            { this.state.show ? <Child /> : null }
        </div>
    }


    updateText( text ) {
        this.setState( {
            text: text,
            show:false
        } )
    }
    shouldComponentUpdate() {
        console.log( 'parent shouldComponentUpdate executed' );
        return true
    }
    getSnapshotBeforeUpdate( prevProps, prevState ) {
        console.log( 'Parent getSnapshotBeforeUpdate Executed' );
        return 'scrolling position'
    }
    componentDidUpdate( prevProps, prevState, snapshot ) {
        console.log( 'Parent componentDidUpdate Executed' );
        console.log( '================================' );
        console.log( 'prevProps', prevProps );
        console.log( 'prevState', prevState );
        console.log( 'snapshot', snapshot );
        console.log( '================================' );
    }
    componentDidMount() {
        /*  1.used to make side effects i.e., making api calls,
        interacting with Dom.
        2. used to update the state */
        console.log( 'Parent componentDidMount Executed' );
    }
}
class Child extends React.Component{
    render() {
        return <div>Child component</div>
    }
    componentWillUnmount() {
        console.log( 'Child componentWillUnmount executed' );
    }
    }

ReactDOM.render(<Parent/>,document.getElementById("container"))