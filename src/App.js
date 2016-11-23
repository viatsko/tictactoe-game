import React, { Component } from 'react';
import './App.css';

class Cell extends React.Component {
  render() {
    return (
      <span className="cell" onClick={() => this.props.onClick()}>{this.props.value}</span>
    );
  }
}

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
  
  onCellClick(i) {
    const cells = this.state.cells.slice();
    cells[i] = 'X';
    
    this.setState({
      cells: cells
    });
  }
  
  renderCell(i) {
    return <Cell value={this.state.cells[i]} onClick={() => this.onCellClick(i)} />;
  }
  
  render() {
    return (
      <div className="field">
        {this.renderCell(0)}
        {this.renderCell(1)}
        {this.renderCell(2)}
        <br />
        {this.renderCell(3)}
        {this.renderCell(4)}
        {this.renderCell(5)}
        <br />
        {this.renderCell(6)}
        {this.renderCell(7)}
        {this.renderCell(8)}
      </div>
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
