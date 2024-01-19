import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import TodoList from './TodoList.js';
import Form from './Form';
import { Container, Typography, Paper } from '@mui/material';

const App = () => {
  return (
<Provider store={store}>
<Container component="main" maxWidth="xs">
  <Paper elevation={3} style={{ padding: 20, marginTop: 50 }}>
    <Typography variant="h4" align="center" gutterBottom>
      Todo List
    </Typography>
    <TodoList />
    <Form  />
  </Paper>
</Container>
</Provider>
  );
};

export default App;
