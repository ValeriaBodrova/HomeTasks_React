import React, { Component } from 'react';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
    };
  }

  handleToggle = (index) => {
    const updatedTodos = [...this.state.todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    this.setState({ todos: updatedTodos });
  };

  handleAddTodo = () => {
    const { newTodo, todos } = this.state;
    if (newTodo.trim() !== '') {
      const newTodos = [...todos, { text: newTodo, completed: false }];
      this.setState({ todos: newTodos, newTodo: '' });
    }
  };

  render() {
    const { todos, newTodo } = this.state;

    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => this.handleToggle(index)}
            >
              {todo.text}
            </li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => this.setState({ newTodo: e.target.value })}
            placeholder="Enter a new todo..."
          />
          <button onClick={this.handleAddTodo}>Add Todo</button>
        </div>
      </div>
    );
  }
}

export default TodoApp;
