import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const url = new URL('https://mockapi.io/users/1/tasks');
  url.searchParams.append('completed', 'false');
  url.searchParams.append('page', '1');
  url.searchParams.append('limit', '10');

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  });
console.log(response);

  if (!response.ok) {
    throw new Error('Failed to fetch tasks');
  }

  const tasks = await response.json();
  return tasks;


});

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
        state.push({ id: Date.now(), text: action.payload, completed: false });
      },
    toggleTodo: (state, action) => {
        const todo = state.find(todo => todo.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed;
        }
      },
      deleteTodo: (state, action) => {
        const todoIndex = state.findIndex(todo => todo.id === action.payload);
        if (todoIndex !== -1) {
          state.splice(todoIndex, 1);
        }
      },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      // Маніпулюємо станом, а не повертаємо новий стан
      state.length = 0; // Очистити стан
      state.push(...action.payload); // Додати нові дані
    });
  },  
});

export default todosSlice.reducer;
export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
