import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: ['Item 1', 'Item 2', 'Item 3'], // Ваш масив даних
    };
  }

  render() {
    return (
      <div>
        <h1>Список елементів</h1>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
