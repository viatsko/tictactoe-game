import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
        <div className="field">
          <Cell /> <Cell /> <Cell /> <br/>
          <Cell /> <Cell /> <Cell /> <br/>
          <Cell /> <Cell /> <Cell /> <br/>
        </div>
      </div>
    );
  }
}

export default App;
