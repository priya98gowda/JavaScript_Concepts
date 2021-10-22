import React, { Component, PureComponent } from 'react'

/* When a class Component is extending Purecomponent whenever state or props is changed in shouldComponentUpdate method shallow comparison of the state or props will be done and if at all if there are some changes in state or props the nextlifecycle methods of updating phase will be executed i.e., render(),getSnapshotBeforeUpdate(),ComponentDidUpdate() ELSE the next life cycle methods of updating phase will not be executed and render will be avoided. 
NOTE: it does shallow coparison not deep comparison
 */

export class RegComp extends Component {
    render() {
        console.log(this.props.uname);
        return (
            <div>
                {this.props.uname}
            </div>
        )
    }
}

export default RegComp
