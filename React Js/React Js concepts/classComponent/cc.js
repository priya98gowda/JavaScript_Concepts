class Header extends React.Component {
    render() { 
        return ( <div>
            <h1>Header 1</h1>
            <h1>Header 2</h1>
        </div>  );
    }
}

class Content extends React.Component {
    render() { 
        return ( <p>Welcome { this.props.firstName } { this.props.lastName}</p> );
    }
}

class Footer extends React.Component {
    render() { 
        return ( <h1>Footer</h1> );
    }
}
ReactDOM.render( <div>
    <Header />
    <Content firstName = 'Raj' lastName = 'Kumar'/>
    <Content firstName = 'Darshan' lastName = 'Thugudeepa'/>
    <Content firstName = 'Kiccha' lastName = 'Sudeepa'/>
    <Footer />
</div>,
    document.getElementById( 'container' ) )


    