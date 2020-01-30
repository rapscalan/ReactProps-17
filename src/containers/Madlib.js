import React, { Component } from 'react';
import Form from '../components/madlib/Form';
import Result from '../components/madlib/Result';

export default class Madlib extends Component{
  state = {
    showResult: false,
    words: [],
    inputs: {
      '0': '',
      '1': '',
      '2': '',
      '3': '',
      '4': '',
      '5': '',
      '6': '',
      '7': '',
      '8': '',
      '9': '',
      '10': '',
      '11': ''
    }
  }

  toggleResult = () =>
    this.setState(state => ({ ...state, showResult: !state.showResult }));

  handleSubmit = event => {
    event.preventDefault();
    this.toggleResult();
    this.setState(state => ({
      words: [
        state.inputs['0'],
        state.inputs['1'],
        state.inputs['2'],
        state.inputs['3'],
        state.inputs['4'],
        state.inputs['5'],
        state.inputs['6'],
        state.inputs['7'],
        state.inputs['8'],
        state.inputs['9'],
        state.inputs['10']
      ]

    }));
  }

  handleChange = ({ target }) => {
    this.setState(prevstate => ({
      ...prevstate,
      inputs: {
        ...prevstate.inputs,
        [target.name]: target.value
      },  
    }));
  }

  render() {
    const { showResult, words } = this.state;
    return (
      <>
        {!showResult && <Form onSubmit={this.handleSubmit} 
          onChange={this.handleChange}/>}
        {showResult && <Result words={ words } closeResult={this.toggleResult} />}
      </>
    );
  }
}
