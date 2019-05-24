import React from 'react';
import ReactDOM from 'react-dom';
import { styles } from './css/styles';

const divStyle = {
  background:styles.color,
  height:     '600' 
};

export class Home extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <footer>THANK YOU FOR VISITING MY HOMEPAGE!</footer>
      </div>
    );
  }
}

