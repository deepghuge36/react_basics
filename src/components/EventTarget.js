import React, { Component } from 'react'

export default class EventTarget extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      date: '',
    };
  };

  _onChange = (e) => {
    this.setState({
      // check in input name properties is same as the value
      [e.target.name]: e.target.value,
    });
  };
  _onSubmit = () => {
    const { name, email, date } = this.state;
    const newData = ({
      name,
      email,
      date
    });
    console.log(newData);
  };
  render() {
    const { name, email ,date} = this.state;
    return (
      <div>
        <input
          placeholder="Name"
          name="name"
          value={name}
          type="text"
          onChange={this._onChange}
        />
   
        <input
          placeholder="Email"
          name="email"
          value={email}
          type="email"
          onChange={this._onChange}
        />

        <input
          placeholder="Date"
          name="date"
          value={date}
          type="Date"
          onChange={this._onChange}
        />
        <button onClick={this._onSubmit}>Submit</button>

        <h3>name:{name}</h3>
        <h3>email:{email}</h3>
        <h3>Date:{date}</h3>
      </div>
    );
  };
};
