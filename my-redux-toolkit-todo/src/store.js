import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './todosSlice';

const store = configureStore({
  reducer: {
    todos: todosReduser,
  },
});

export default store;
