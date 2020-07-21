import React, { Component } from 'react'

export default class State extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }
  

  _onClick = () => {
    this.setState({ show: !this.state.show });
  };

  // _onClick() {
  //   this.setState({ show: !this.state.show })
  // };
  render() {
    const { show } = this.state;
    return (
      <div>
        <h3 onClick={this._onClick}>Click</h3>
        {show ? <h1>Welcome to state</h1> : null}
      </div>
    );
  }
  
}