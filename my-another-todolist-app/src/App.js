import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import List from './List';
import Form from './Form';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const handleToggle = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Provider store={store}>
    <div>
      <h1>Todo List</h1>
      <List todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
      <Form onAddTodo={handleAddTodo} />
    </div>
    </Provider>
  );
};

export default App;


