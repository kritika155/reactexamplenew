import React from 'react';
import { ChildClass } from './Mood';
import  Child  from './Child';
import { Sibling } from './Sibling';
import { Home } from './Home';
import { Wow } from './Facebook';
import { AttentionGrabber } from './AttentionGrabber';
import { GuineaPigs } from './GuineaPig';
import BookList from './BookList';
import Input from './Input';

export default class ParentClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { totalClicks: 0 , name: 'Kritika Roy' };
    
    this.changeName = this.changeName.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  handleClick() {
    // const total = this.state.totalClicks;

    // calling handleClick will 
    // result in a state change:
    this.setState(
      { totalClicks: this.state.totalClicks + 1 }
    );
  }

  // The stateful component class passes down
  // handleClick to a stateless component class:
  render() {
    return (
      <div>
        <AttentionGrabber />
        <GuineaPigs />
        <Child name={this.state.name} onChange={this.changeName} />
        <Sibling 
           name={this.state.name} 
          onChange={this.changeName}/>
          <Input />
           <BookList />
        <ChildClass onClick={this.handleClick} totalClicks={this.state.totalClicks}/>
        <Wow />
        <Home />
        </div>
    );
  }
}


