function Welcome( props ) {
    const getData = () => {
        console.log(props.firstName);
    }
    return <div>
        <button onClick={()=>{getData('google')}}>Click</button>
    </div>
}

ReactDOM.render(<Welcome firstName="priya"/>,document.getElementById('container'))