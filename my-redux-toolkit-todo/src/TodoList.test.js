// TodoList.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; 
import TodoList from './TodoList';

const mockStore = configureStore();

describe('TodoList Component', () => {
  it('renders the TodoList component with initial state', () => {
    const store = mockStore({
      todos: [] // передача початкового стану, який очікую від компонента
    });

    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    // Перевірка, чи компонент коректно рендериться з пустим списком todo
    expect(screen.getByText(/todo list/i)).toBeInTheDocument();
    expect(screen.getByText(/no todos yet/i)).toBeInTheDocument();
  });

  it('renders the TodoList component with some todos', () => {
    const store = mockStore({
      todos: [
        { id: 1, text: 'Task 1', completed: false },
        { id: 2, text: 'Task 2', completed: true }
      ]
    });

    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    // Перевірка, чи компонент коректно рендериться з заповненим списком todo
    expect(screen.queryByText(/todo list/i)).toBeInTheDocument();
    expect(screen.queryByText(/no todos yet/i)).not.toBeInTheDocument();

    // Перевірка, чи компонент вірно рендерить кожен todo зі списку
    expect(screen.getByText(/Task 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Task 2/i)).toBeInTheDocument();
  });

  it('dispatches fetchTasks action on mount', () => {
    const store = mockStore({
      todos: []
    });

    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    // Перевірка чи дія fetchTasks відправлена при монтажі компонента
    expect(store.getActions()).toEqual([{ type: 'todos/fetchTasks/pending' }]);
  });

});
