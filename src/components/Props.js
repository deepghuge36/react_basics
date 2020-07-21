import React, { Component } from 'react'

export default class Props extends Component {
  render() {
    return (
      <div>
        {/* using this.props you can handle the given props which is render from main App  */}
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
