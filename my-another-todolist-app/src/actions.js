export const ADD_TODO_TYPE = '[Todos] Add Todo';
export const addTodo = (todo) => ({ type: ADD_TODO_TYPE, payload: todo });

export const TOGGLE_TODO_TYPE = '[Todos] Toggle Todo';
export const toggleTodo = (id) => ({ type: TOGGLE_TODO_TYPE, payload: id });

export const DELETE_TODO_TYPE = '[Todos] Delete Todo';
export const deleteTodo = (id) => ({ type: DELETE_TODO_TYPE, payload: id });