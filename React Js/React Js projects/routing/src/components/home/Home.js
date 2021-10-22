import React from 'react'
import './Home.css'
function Home( props ) {
    console.log( 'Home Props', props );
    const navigateToAbout = () => {
        // navigating programatically
        console.log( props );
        props.history.push( '/about' );
    }
    return (
        <div id="home">
            <h1>Home Page</h1>
            <button onClick={navigateToAbout}>Navigate to About Page</button>
        </div>
    )
}

export default Home
