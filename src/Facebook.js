import React from 'react';
import ReactDOM from 'react-dom';
import { colorStyles } from './css/facebookStyles';
let divStyle = {
    background: colorStyles.darkBlue,
    color: colorStyles.white
  };

export class Wow extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        Wow, I stole these colors from Facebook!
      </div>
    );
  }
}

