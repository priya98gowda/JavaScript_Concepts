import React, { useEffect, useState } from 'react'

function UseEffectWithArray() {
    const [birds, setbirds] = useState( [] );
    useEffect(() => {
        if ( birds.length > 0 ) {
           console.log('useEffect [birds] executed');
       }
    }, [birds] )
    
    const addBird = () => {
        // setbirds(['peacock'])
        /* never ever mutate the state like below and update the state (If the state is updated like below reference of birds will be same and rerender will not happen)
        birds.push( 'peacock' );
        setbirds(birds) */

       /*  Always update the state like below
        1.Take a copy of state (array/object)
        2.Do the Modifications to copied object
        3.set the state with copied object */

        const birdsCopy = [...birds];
        birdsCopy.push( 'peacock' );
        setbirds( birdsCopy );
    }

    return (
        <div>
            {birds.map( ( bird, index ) => {
                return <p key={ index }>{ bird } at index { index }</p>
            } ) }
            <button onClick={addBird}>ADD</button>
        </div>
    )
}

export default UseEffectWithArray
