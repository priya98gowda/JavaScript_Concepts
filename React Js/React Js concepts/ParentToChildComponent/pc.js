function App( props ) {
    const data= ['chocolate','vanilla','Strawbery','ButterScotch']
    return <div>
        <Home appName='Netflix' userName={ props.loggedinUser } />
        <List list={ data}/>
    </div>
}
function List( props ) {
    return <div>
        { props.list.map( ( value, index ) => {
            return <p key={ index }>{ value }</p>
        } ) }
    </div>
}

function Home(props) {
    return <div>
        <h1>Home Page { props.appName}</h1>
        <h2>{ props.userName}</h2>
    </div>
}
ReactDOM.render(<App loggedinUser = 'priya'/>,document.getElementById('container'))