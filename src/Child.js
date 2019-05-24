import React from 'react';

export default class Child extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <select id="great-names" onChange={this.handleChange}>
          <option value="Kritika Roy">
            Kritika Roy
          </option>

          <option value="Ashish Kumar Roy">
            Ashish Kumar Roy
          </option>

          <option value="Vivaan Chakraborty">
            Vivaan Chakraborty
          </option>
        </select>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
      </div>
    );
  }
}