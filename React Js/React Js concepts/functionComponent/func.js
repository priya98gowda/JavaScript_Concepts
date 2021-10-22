function Header({logo , brand}) {
    return <h1>Header { logo } {brand}</h1>
}

function Content(props) {
    return <p>Welcome { props.userName}</p>
}

function Footer({person}) {
    return <h2>Footer { person.fname } { person.lastName}</h2>
}

ReactDOM.render( <div>
    <Header  logo = 'car.jpeg' brand='Fortuner' price='1200000'/>
    <Content userName= 'Priya' />
    <Footer person={ { fname: 'priya' ,lastName: 'J'}}/>
</div>,
    document.getElementById( 'container' ) )