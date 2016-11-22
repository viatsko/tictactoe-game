import React, { Component } from 'react';
import './App.css';

class Field extends React.Component {
  constructor() {
    super();
    
    this.state = {
      cells: [
        null, null, null,
        null, null, null,
        null, null, null
      ]
    };
  }
  
  render() {
    return (
      <div className="field">
        <Cell /> <Cell /> <Cell /> <br/>
        <Cell /> <Cell /> <Cell /> <br/>
        <Cell /> <Cell /> <Cell /> <br/>
      </div>
    );
  }
}

class Cell extends React.Component {
  render() {
    return (
      <span className="cell"></span>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <Field />
      </div>
    );
  }
}

export default App;
