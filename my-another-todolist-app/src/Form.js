import React from 'react';
import { addTodo } from './actions';
import { useDispatch } from 'react-redux';

const Form = () => {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const todoText = e.target.elements.todoInput.value;
    dispatch(
      addTodo({
        id: crypto.randomUUID(),
        text: todoText,
        isDone: false,
      })
    );
    e.target.reset();
  };
  return (
    <form onSubmit={submitHandler}>
      <input placeholder="Name of todo" autoComplete="off" name="todoInput" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default Form;