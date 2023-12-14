import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: ['Item 1', 'Item 2', 'Item 3'], 
    };
    this.inputRef = React.createRef(); 
  }

  focusInput = () => {
    this.inputRef.current.focus(); 
  };

  render() {
    return (
      <div>
        <h1>Список елементів</h1>
        <ul>
        {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div>
          <input ref={this.inputRef} type="text" placeholder="Введіть текст" />
          <button onClick={this.focusInput}>Focus input</button>
        </div>
      </div>
    );
  }
}

export default App;
