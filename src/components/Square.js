import React, { Component } from 'react';
import './Square.css';

export default class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <button onClick={() => this.setState({ value: 'X' })} className='square'>
        {this.state.value}
      </button>
    );
  }
}
