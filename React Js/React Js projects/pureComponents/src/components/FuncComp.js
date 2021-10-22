import React from 'react'

function FuncComp(props) {
    return (
        <div>
            {props.uname }
            { console.log('Func Comp',props.uname)}
        </div>
    )
}

export default React.memo( FuncComp );
