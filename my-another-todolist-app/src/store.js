import { createStore, applyMiddleware } from 'redux';
import { ADD_TODO_TYPE, DELETE_TODO_TYPE, TOGGLE_TODO_TYPE } from './actions';
import { initialTodos } from './state';

const reducers = (state = initialTodos, { type, payload }) => {
  switch (type) {
    case ADD_TODO_TYPE:
      return state.concat(payload);
    case TOGGLE_TODO_TYPE:
      return state.map((todo) =>
        todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    case DELETE_TODO_TYPE:
      return state.filter((todo) => todo.id !== payload);
    default:
      return state;
  }
};

const store = createStore(reducers, applyMiddleware());

export default store;
