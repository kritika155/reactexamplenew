import React from 'react';
import ReactDOM from 'react-dom';

export default class Input extends React.Component {
  constructor(props) {
		super(props);

		this.state = { userInput: '',text:'' };

		this.handleUserInput = this.handleUserInput.bind(this);
	}
  handleUserInput(e) {
	  this.setState({
        userInput: e.target.value,
        text:e.target.value
	  },()=>{
          console.log(this.state.text)
      });
	}
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleUserInput} />
        <h1>I am an h1.{this.state.text}</h1>
      </div>
    );
  }
}