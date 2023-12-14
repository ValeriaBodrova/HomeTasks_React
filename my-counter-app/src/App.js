import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <div>
          <button onClick={this.decrement}>Decrement</button>
          <span>{this.state.counter}</span>
          <button onClick={this.increment}>Increment</button>
        </div>
      </div>
    );
  }
}

export default App;
