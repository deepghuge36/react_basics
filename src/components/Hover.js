import React, { Component } from 'react'
import withCounter from './withCounter'
 class Hover extends Component {

    render() {
        const {count,onButtonClick} = this.props
        return (
            <div>
            <button onMouseOver={onButtonClick}>
              {this.props.name} hovered {count} times</button>
            </div>
        )
    }
}
export default withCounter(Hover,1)