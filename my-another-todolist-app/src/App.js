import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import List from './List.js';
import Form from './Form.js';

const App = () => {
  return (
    <Provider store={store}>
    <div>
      <h1>Todo List</h1>
      <List />
      <Form />
    </div>
    </Provider>
  );
};

export default App;


