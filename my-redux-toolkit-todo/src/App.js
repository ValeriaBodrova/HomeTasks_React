import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import TodoList from './TodoList.js';
import Form from './Form';

const App = () => {
  return (
    <Provider store={store}>
    <div>
      <h1>Todo List</h1>
      <TodoList />
      <Form/>
    </div>
    </Provider>
  );
};

export default App;
